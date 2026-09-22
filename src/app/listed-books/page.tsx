"use client";
import BookCard from "@/components/Shared/BookCard";
import ListedBookCard from "@/components/Shared/ListedBookCard";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/booksType";
import Image from "next/image";
import React, { useContext } from "react";

const ListedBooks = () => {
  const { readBooks, wishlist } = useContext(BooksContext);
  console.log(readBooks);
  console.log(wishlist);

  return (
    <div className="container mx-auto py-[20px]">
      <h2 className="my-7 bg-amber-200 rounded-3xl py-16 font-bold text-4xl text-center">
        Listed Books
      </h2>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read books(${readBooks.length})`}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {readBooks.length === 0 ? (
            <p className="text-center text-lg font-semibold">
              No books in the Read list.
            </p>
          ) : (
            readBooks.map((book: IBook) => (
              <ListedBookCard key={book.bookId} book={book} />
            ))
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Wishlist books(${wishlist.length})`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {wishlist.length === 0 ? (
            <p className="text-center text-lg font-semibold">
              No books in the Wishlist.
            </p>
          ) : (
            <ul>
              {wishlist.map((book: IBook) => (
                <ListedBookCard key={book.bookId} book={book} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
