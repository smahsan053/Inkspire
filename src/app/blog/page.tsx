"use client";
import BlogCard from "@/components/BlogCard";
import React, { useEffect } from "react";
import { BlogType } from "../../../typings";
import { useAppDispatch, useAppSelector } from "../store";
import { fetchBlogs } from "../features/blogs/blogsSlice";
import Link from "next/link";

function Blog() {
  const dispatch = useAppDispatch();
  const { blogs } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <main className="flex min-h-screen flex-col p-8 bg-gradient-to-b from-black via-gray-800 to-gray-900 mt-8">
      <h1 className="text-2xl font-bold uppercase my-12 text-center text-black dark:text-white">
        Most recent blogs
      </h1>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 items-center justify-center">
        {blogs.map((blog: BlogType, i) => (
          <BlogCard blog={blog} key={i} />
        ))}
      </section>
      <div className="mt-12 flex flex-col md:flex-row items-center gap-4 md:hidden">
        <Link
          href="/"
          className="px-6 py-3 text-lg font-semibold bg-pink-600 hover:bg-pink-700 rounded-lg shadow-md transition-colors duration-300"
        >
          Go to Home Page
        </Link>
       
      </div>
    </main>
  );
}

export default Blog;
