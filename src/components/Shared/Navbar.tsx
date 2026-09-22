"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 border-b border-base-200 bg-base-100/95 shadow-sm backdrop-blur-md">
      <div className="navbar mx-auto min-h-18 max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Logo + Mobile Menu */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul className="menu dropdown-content z-50 mt-3 w-56 rounded-2xl border border-base-200 bg-base-100 p-3 shadow-xl">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/books">Books</Link>
              </li>
              <li>
                <Link href="/listed-books">Listed Books</Link>
              </li>
              <li>
                <Link href="/read-books">Read Books</Link>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="btn btn-ghost gap-2 px-2 text-xl normal-case hover:bg-transparent"
          >
            <Image
              src="/book.ico"
              alt="Book Vibe Logo"
              width={34}
              height={34}
              className="rounded-lg"
            />

            <span className="font-extrabold tracking-tight">
              Book <span className="text-primary">Vibe</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center gap-1 px-1 font-medium">
            <li>
              <Link href="/" className="rounded-full px-5">
                Home
              </Link>
            </li>

            <li>
              <Link href="/books" className="rounded-full px-5">
                Books
              </Link>
            </li>

            <li>
              <Link href="/listed-books" className="rounded-full px-5">
                Listed Books
              </Link>
            </li>
            <li>
              <Link href="/read-books">Read Books</Link>
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end">
          {/* Auth Buttons */}
          <div className="ml-2 hidden items-center gap-2 sm:flex">
            <button className="btn btn-ghost rounded-full px-5">Sign in</button>

            <button className="btn btn-primary rounded-full px-5 shadow-md">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
