import { PostData, decodePost } from "./decodePost";

export type PostsData = {
  posts: PostData[];
};

export function decodePosts(data: any): PostsData {
  const rawPosts = data ? data.posts.data : [];
  const posts = rawPosts.map((post: any) => decodePost(post));
  return {
    posts,
  };
}
