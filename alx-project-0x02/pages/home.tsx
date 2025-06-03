import React, { useState } from "react";
import Head from "next/head";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

interface Post {
  title: string;
  content: string;
}

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([
    { title: "Card Title 1", content: "This is the content of the first card." },
    { title: "Card Title 2", content: "Here is some different content for the second card." },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts((prev) => [...prev, { title, content }]);
  };

  return (
    <>
      <Head>
        <title>Home - ALX Project 2</title>
      </Head>
      <Header />
      <main className="p-8 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Welcome to the Home Page</h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add New Post
        </button>

        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddPost={handleAddPost}
        />
      </main>
    </>
  );
}
