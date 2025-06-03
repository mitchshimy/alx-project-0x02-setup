import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

export default function UsersPage() {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <Header />
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
    </>
  );
}
