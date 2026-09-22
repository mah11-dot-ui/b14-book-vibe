import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="px-4 md:px-8 lg:px-12 py-6">
      <div className="hero min-h-[500px] rounded-3xl bg-base-200 overflow-hidden">
        <div className="hero-content w-full max-w-7xl flex-col-reverse gap-10 lg:flex-row-reverse lg:justify-between">
          
          {/* Image */}
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl"></div>

            <Image
              alt="Books collection"
              src="/hero_img.jpg"
              width={500}
              height={500}
              priority
              className="relative w-full rounded-2xl object-cover shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          {/* Content */}
          <div className="w-full max-w-2xl text-center lg:text-left">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              📚 Discover Your Next Favorite Book
            </span>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Books to{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                freshen up
              </span>{" "}
              your bookshelf
            </h1>

            <p className="mb-8 max-w-xl text-base leading-7 text-base-content/70 sm:text-lg">
              Explore a carefully selected collection of inspiring stories,
              timeless classics, and exciting new reads for every kind of
              reader.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <button className="btn btn-primary rounded-full px-7 shadow-lg transition-all duration-300 hover:scale-105">
                Explore Books
              </button>

              <button className="btn btn-outline rounded-full px-7">
                View Categories
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
