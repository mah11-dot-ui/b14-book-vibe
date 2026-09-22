"use client";
import { createContext, useState } from "react";
import { IBook } from "@/types/booksType";


interface BooksContextValue {
    readBooks: IBook[];
    setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
    wishlist: IBook[];
    setWishlist: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export const BooksContext = createContext<BooksContextValue>({
    readBooks: [],
    setReadBooks: () => undefined,
    wishlist: [],
    setWishlist: () => undefined,
});

const BooksProvider = ({children}: {children: React.ReactNode}) => {
    const [readBooks, setReadBooks] = useState<IBook[]>([]);
    const [wishlist, setWishlist] = useState<IBook[]>([]);


    const sharedData = {
        readBooks,
        setReadBooks,
        wishlist,
        setWishlist
    }

    return <BooksContext.Provider value={sharedData}>
        {children}
    </BooksContext.Provider>
};

export default BooksProvider;