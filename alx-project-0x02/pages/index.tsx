// pages/index.tsx
import Head from "next/head";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Project 2</title>
      </Head>
      <Header />
      <main className="p-8 text-center">
        <h1 className="text-3xl font-bold">Welcome to ALX Project 2!</h1>
        <p className="mt-4 text-gray-600">Built with Next.js, TypeScript, and Tailwind CSS.</p>
      </main>
    </>
  );
}
