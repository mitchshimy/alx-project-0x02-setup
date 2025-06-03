import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const linkClasses = (path: string) =>
    `px-3 py-2 rounded ${
      router.pathname === path ? "bg-blue-600 text-white" : "text-blue-600 hover:bg-blue-100"
    }`;

  return (
    <header className="bg-gray-100 shadow-md">
      <nav className="max-w-5xl mx-auto flex gap-4 p-4">
        <Link href="/home" className={linkClasses("/home")}>
          Home
        </Link>
        <Link href="/about" className={linkClasses("/about")}>
          About
        </Link>
        <Link href="/posts" className={linkClasses("/posts")}>
          Posts
        </Link>
        <Link href="/users" className={linkClasses("/users")}>
          Users
        </Link>
      </nav>
    </header>
  );
};

export default Header;
