import type { GetStaticPaths, GetStaticProps } from "next";
import { apolloClient } from "src/apolloClient";
import { processMarkdown } from "src/processMarkdown";
import { queryPostsSlugs } from "src/queries/queryPostsSlugs";
import { decodePosts } from "src/decoders/decodePosts";
import { queryPostsBySlug } from "src/queries/queryPostsBySlug";
import Layout from "src/components/layout";

type BlogPostProps = {
  hero_image: string;
  title: string;
  date: string;
  hero_image_alt: string;
  hero_image_credit_link: string;
  hero_image_credit_text: string;
  content: string;
};

type BlogPostQuery = {
  slug: string;
};

const BlogPost = ({
  date,
  hero_image,
  hero_image_alt,
  hero_image_credit_link,
  hero_image_credit_text,
  title,
  content,
}: BlogPostProps) => {
  return (
    <Layout pageTitle={title}>
      <p>{new Date(date).toLocaleDateString("pt-br")}</p>
      <img src={hero_image} alt={hero_image_alt} />
      <p>
        Photo Credit:{" "}
        <a href={hero_image_credit_link}>{hero_image_credit_text}</a>
      </p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<
  BlogPostProps,
  BlogPostQuery
> = async ({ params }) => {
  const { data } = await apolloClient.query({
    query: queryPostsBySlug,
    variables: {
      slug: params?.slug,
    },
  });

  const {
    posts: [post],
  } = decodePosts(data);
  const content = await processMarkdown(post.content);

  return {
    props: {
      date: post.publishDate,
      hero_image: post.image,
      hero_image_alt: "",
      hero_image_credit_link: "",
      hero_image_credit_text: "",
      title: post.title,
      content,
    },
  };
};

export const getStaticPaths: GetStaticPaths<BlogPostQuery> = async () => {
  const { data } = await apolloClient.query({
    query: queryPostsSlugs,
  });

  const { posts } = decodePosts(data);
  const paths = posts.map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default BlogPost;
