import { IBook } from '@/types/booksType';
import Image from 'next/image';
import React from 'react';

const ListedBookCard = ({ book }: { book: IBook}) => {
    return (
        <div>
               <div key={book.bookId} className="group flex flex-col overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:flex-row">
                {/* Book Image */}
                <div className="relative shrink-0 bg-base-200 p-5 md:w-56">
                  <div className="relative h-[400px] w-full overflow-hidden rounded-xl md:h-full">
                    <Image
                      src={book.image}
                                alt={book.bookName}
                        fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 224px"
                    />

                    {/* Category */}
                    <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-content shadow-md">
                      {book.category}
                    </span>
                  </div>
                </div>

                {/* Book Content */}
                <div className="flex flex-1 flex-col p-5 md:p-7">
                  {/* Top */}
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="text-2xl font-bold transition-colors group-hover:text-primary">
                        {book.bookName}
                      </h2>

                      <p className="mt-1 text-base-content/60">
                        by{" "}
                        <span className="font-semibold text-base-content/80">
                          {book.author}
                        </span>
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex w-fit items-center gap-1 rounded-full bg-warning/10 px-4 py-2 text-sm font-bold text-warning">
                      ⭐ {book.rating}
                    </div>
                  </div>

                  {/* Review */}
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-base-content/65 md:text-base">
                    {book.review}
                  </p>

                  {/* Book Info */}
                  <div className="mt-5 grid grid-cols-2 gap-3 border-y border-base-200 py-4 sm:grid-cols-4">
                    <div>
                      <p className="text-xs text-base-content/50">Pages</p>
                      <p className="mt-1 font-semibold">{book.totalPages}</p>
                    </div>

                    <div>
                      <p className="text-xs text-base-content/50">Published</p>
                      <p className="mt-1 font-semibold">
                        {book.yearOfPublishing}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-base-content/50">Publisher</p>
                      <p className="mt-1 truncate font-semibold">
                        {book.publisher}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-base-content/50">Book ID</p>
                      <p className="mt-1 font-semibold">#{book.bookId}</p>
                    </div>
                  </div>

                  {/* Bottom */}
                  <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {book.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content/70"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Action */}
                    <button className="btn btn-primary rounded-xl px-6">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
        </div>
    );
};

export default ListedBookCard;