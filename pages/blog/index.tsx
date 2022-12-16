
import { GetStaticProps } from "next";
import { apolloClient } from "src/apolloClient";
import { decodePosts, PostsData } from "src/decoders/decodePosts";
import { queryLatestPosts } from "src/queries/queryLatestPosts";
import Layout from "../../src/components/layout";

type PostsExamplePageProps = PostsData;

export default function PostsExamplePage(props: PostsExamplePageProps) {
  return (
    <Layout pageTitle="Intranet">
    <div className="feed">
      {props.posts.map(({ title, image }) => (
         <div className="feed-grid">
          <img src={image} width={320} />
          <h2>{title}</h2>
        </div>
        
      ))}
    </div>
    </Layout>
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
  <style jsx>{`
        .feed {
          padding: 8px 0;
        }
        .feed-grid {
          display: grid;
          gap: 16px;
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 600px) {
          .feed-grid {
            gap: 1px !important;
          }
        }
      `}</style>
};
