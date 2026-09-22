"use client";

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/booksType";
import React, { useContext } from "react";
import toast from "react-hot-toast";

const WishlistButton = ({book}: {book: IBook}) => {

  const { wishlist, setWishlist } = useContext(BooksContext);

  const handleWishlistBook = () => {
    setWishlist([...wishlist, book]);
    toast.success(`${book.bookName} has been added to wishlist`, {
      position: "top-right",
      duration: 3000,
    });
  };

  return (
    <button onClick={() => handleWishlistBook()} className="btn btn-outline rounded-xl px-8">Add to Wishlist</button>
  );
};

export default WishlistButton;
