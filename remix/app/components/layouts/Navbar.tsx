import { Link } from "@remix-run/react";

export default function Navbar() {
  return (
    <nav className="flex flex-wrap items-center text-base gap-10">
      <Link to="/">Movies</Link>
      <Link to="/">Characters</Link>
    </nav>
  );
}
