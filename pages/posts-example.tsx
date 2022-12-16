import { GetStaticProps } from "next";
import { apolloClient } from "src/apolloClient";
import { decodePosts, PostsData } from "src/decoders/decodePosts";
import { queryLatestPosts } from "src/queries/queryLatestPosts";

type PostsExamplePageProps = PostsData;

export default function PostsExamplePage(props: PostsExamplePageProps) {
  return (
    <div>
      {props.posts.map(({ title, image }) => (
        <div style={{ display: "flex" }}>
          <img src={image} width={320} />
          <h2>{title}</h2>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps<
  PostsExamplePageProps
> = async () => {
  const { data } = await apolloClient.query({
    query: queryLatestPosts,
  });
  const { posts } = decodePosts(data);
  return {
    props: {
      posts,
    },
  };
};
