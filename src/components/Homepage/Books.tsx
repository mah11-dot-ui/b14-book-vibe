import Image from "next/image";
import BookCard from "../Shared/BookCard";
import { IBook } from "@/types/booksType";

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  const data = await res.json();
  return data;
};

const Books = async () => {
  const books = await getBooks();

  return (
    <section className="container mx-auto my-16 px-4">
      {/* Section Header */}
      <div className="mb-10 text-center">
        <span className="mb-2 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
          📚 Our Collection
        </span>

        <h2 className="text-4xl font-extrabold md:text-5xl">
          Explore Popular{" "}
          <span className="text-primary">Books</span>
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-base-content/60">
          Discover amazing stories, timeless classics, and inspiring books
          from authors around the world.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.slice(0, 3).map((book: IBook) => (
          <BookCard book={book} key={book.bookId} />
        ))}
      </div>
    </section>
  );
};

export default Books;