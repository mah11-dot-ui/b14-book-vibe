"use client";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/booksType";
import React, { useContext } from "react";
import toast from "react-hot-toast";

const ReadButton = ({ book }: { book: IBook }) => {
  const {readBooks, setReadBooks} = useContext(BooksContext);

    const handleReadBook = () => {
      setReadBooks([...readBooks, book]);
      toast.success(`${book.bookName} has been added to read books`, {
        position: "top-right",
        duration: 3000,
      });
  };

  return (
    <>
      <button onClick={() => handleReadBook()} className="btn btn-primary rounded-xl px-8 shadow-md">
        Read Book
      </button>
    </>
  );
};

export default ReadButton;
