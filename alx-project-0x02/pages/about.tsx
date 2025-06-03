import React from "react";
import Head from "next/head";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About - ALX Project 2</title>
      </Head>
      <Header />
      <main className="p-8 max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold">About Page</h1>

        <div className="flex justify-center gap-4">
          <Button size="small" shape="rounded-sm">
            Small & Rounded-sm
          </Button>

          <Button size="medium" shape="rounded-md">
            Medium & Rounded-md
          </Button>

          <Button size="large" shape="rounded-full">
            Large & Rounded-full
          </Button>
        </div>
      </main>
    </>
  );
}
