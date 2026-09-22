import ReadButton from "@/components/InteractiveButtons/ReadButton";
import WishlistButton from "@/components/InteractiveButtons/WishlistButton";
import { IBook } from "@/types/booksType";
import Image from "next/image";
import React from "react";

interface IPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  return res.json();
};

const page = async ({ params }: IPageProps) => {
  const { id } = await params;

  const booksData = await getBooks();

  const book = booksData.find(
    (book: IBook) => String(book.bookId) === String(id)
  ) as IBook;

  if (!book) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold">Book not found</h2>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-base-200/40 py-12">
      <div className="container mx-auto px-4">

        {/* Main Book Section */}
        <div className="grid overflow-hidden rounded-3xl border border-base-200 bg-base-100 shadow-xl lg:grid-cols-2">

          {/* Book Image */}
          <div className="flex items-center justify-center bg-gradient-to-br from-primary/10 via-base-200 to-secondary/10 p-8 md:p-12 lg:p-16">
            <div className="relative w-full max-w-sm">
              {/* Glow */}
              <div className="absolute inset-0 scale-90 rounded-3xl bg-primary/20 blur-3xl" />

              <Image
                src={book.image}
                alt={book.bookName}
                width={500}
                height={650}
                priority
                className="relative mx-auto max-h-[600px] w-auto rounded-2xl object-cover shadow-2xl transition duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Book Information */}
          <div className="flex flex-col justify-center p-6 md:p-10 lg:p-14">

            {/* Category + Rating */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="badge badge-primary px-4 py-3 font-semibold">
                {book.category}
              </span>

              <span className="rounded-full bg-warning/10 px-4 py-2 text-sm font-bold text-warning">
                ⭐ {book.rating} / 5
              </span>
            </div>

            {/* Title */}
            <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">
              {book.bookName}
            </h1>

            {/* Author */}
            <p className="mt-3 text-lg text-base-content/60">
              By{" "}
              <span className="font-semibold text-base-content">
                {book.author}
              </span>
            </p>

            {/* Short divider */}
            <div className="my-6 h-px w-full bg-base-200" />

            {/* Book Stats */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-base-200 p-4">
                <p className="text-sm text-base-content/50">Pages</p>
                <p className="mt-1 text-xl font-bold">
                  {book.totalPages}
                </p>
              </div>

              <div className="rounded-2xl bg-base-200 p-4">
                <p className="text-sm text-base-content/50">Published</p>
                <p className="mt-1 text-xl font-bold">
                  {book.yearOfPublishing}
                </p>
              </div>

              <div className="rounded-2xl bg-base-200 p-4">
                <p className="text-sm text-base-content/50">Book ID</p>
                <p className="mt-1 text-xl font-bold">
                  #{book.bookId}
                </p>
              </div>
            </div>

            {/* Publisher */}
            <div className="mt-5">
              <p className="text-sm text-base-content/50">
                Published by
              </p>

              <p className="mt-1 font-semibold">
                {book.publisher}
              </p>
            </div>

            {/* Tags */}
            <div className="mt-6">
              <p className="mb-3 font-bold">Tags</p>

              <div className="flex flex-wrap gap-2">
                {book.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-base-300 px-4 py-2 text-sm font-medium transition hover:border-primary hover:text-primary"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ReadButton book={book} />
                <WishlistButton book={book} />
            </div>
          </div>
        </div>

        {/* Review Section */}
        <section className="mt-8 rounded-3xl border border-base-200 bg-base-100 p-6 shadow-sm md:p-10">
          <div className="mb-5">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Book Review
            </span>

            <h2 className="mt-1 text-2xl font-bold md:text-3xl">
              About this book
            </h2>
          </div>

          <p className="max-w-5xl text-base leading-8 text-base-content/70">
            {book.review}
          </p>
        </section>

      </div>
    </main>
  );
};

export default page;