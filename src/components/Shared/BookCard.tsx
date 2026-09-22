import { IBook } from "@/types/booksType";
import Image from "next/image";
import Link from "next/link";

interface IBookCardProps {
  book: IBook;
}

const BookCard = ({book}: IBookCardProps) => {
  return (
    <div
      key={book.bookId}
      className="group overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      {/* Book Image */}
      <div className="relative h-72 overflow-hidden bg-base-200">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span className="badge badge-primary font-semibold shadow-md">
            {book.category}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute right-4 top-4">
          <span className="flex items-center gap-1 rounded-full bg-base-100/90 px-3 py-1 text-sm font-semibold shadow-md backdrop-blur-sm">
            ⭐ {book.rating}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        <h3 className="line-clamp-1 text-xl font-bold transition-colors group-hover:text-primary">
          {book.bookName}
        </h3>

        <p className="mt-1 text-sm text-base-content/60">
          by{" "}
          <span className="font-medium text-base-content/80">
            {book.author}
          </span>
        </p>

        {/* Book Info */}
        <div className="mt-4 flex items-center justify-between border-y border-base-200 py-3 text-sm">
          <div>
            <p className="text-base-content/50">Pages</p>
            <p className="font-semibold">{book.totalPages}</p>
          </div>

          <div>
            <p className="text-base-content/50">Published</p>
            <p className="font-semibold">{book.yearOfPublishing}</p>
          </div>

          <div>
            <p className="text-base-content/50">Publisher</p>
            <p className="max-w-20 truncate font-semibold">{book.publisher}</p>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags.map((tag: string) => (
            <span
              key={tag}
              className="rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content/70"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <Link href={`/books/${book.bookId}`} className="btn btn-primary mt-5 w-full rounded-xl">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
