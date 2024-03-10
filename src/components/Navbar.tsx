import Link from "next/link";

export const Navbar = () => {
  return (
    <header className=" py-5 border-b">
      <nav className="flex place-content-center container">
        <Link href="/" className="font-medium hover:underline underline-offset-4">
          is X maintained?
        </Link>
      </nav>
    </header>
  );
};
