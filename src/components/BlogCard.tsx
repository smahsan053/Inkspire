import Image from "next/image";
import React from "react";
import { BlogType } from "../../typings";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

function BlogCard({ blog }: { blog: BlogType }) {
  return (
    blog && (
      <div className="w-80 h-96 border-white border p-4 rounded-2xl">
        <div className="flex justify-center items-center flex-col gap-1">
          {blog.image === null ? (
            ""
          ) : (
            <Image
              src={urlFor(blog.image).url()}
              alt={blog.slug}
              width={200}
              height={200}
              className="h-48"
            />
          )}
          <h1 className="text-wrap text-center text-2xl font-bold">
            {blog.title
              .slice(0, 19)
              .concat(blog.title.slice(20).length > 0 ? "..." : "")}
          </h1>
          <p className="text-zinc-400 text-center">
            {blog.summary.slice(0, 100).concat("...")}
          </p>
          <Link
            className="w-full bg-red-500 hover:bg-red-600 active:bg-red-400 rounded-md py-2 text-center"
            href={`/blog/${blog.slug}`}
          >
            Read More
          </Link>
        </div>
      </div>
    )
  );
}

export default BlogCard;
