// pages/posts.tsx
import React from "react";
import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <>
      <Header />
      <main className="p-8 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Latest Posts</h1>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            userId={post.userId}
          />
        ))}
      </main>
    </>
  );
}

// ✅ Add this to statically fetch data at build time
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const posts = data;

  return {
    props: {
      posts,
    },
  };
}
