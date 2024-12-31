import { client } from "@/sanity/lib/client";
import React from "react";
import { Author, Block, BlogType } from "../../../../typings";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { components } from "@/components/CustomStylingPortableText";
import CommentSection from "@/components/CommentSection";

export const revalidate = 60;

export async function generateStaticParams() {
  const query = `*[_type=='post']{
  "slug":slug.current
}`;
  const slugs = await client.fetch(query);
  // console.log(slugs);

  const slugRoutes: string[] = slugs.map((slug: { slug: string }) => slug.slug);
  // console.log(slugRoutes);
  return slugRoutes.map((slug: string) => ({
    params: { slug },
    revalidate: 10,
  }));
}

async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const query = `*[_type == 'post' && slug.current == '${slug}']{
  _id,
  title,
  summary,
  image,
  content,
  "comments": *[_type == "comment" && references(^._id)]{name,email,comment,_createdAt}, // Filter comments for the specific post
  author->{
    bio,
    image,
    name
  }
}[0]

`;
  const blog: Omit<BlogType, "slug"> & {
    content: Block;
    author: Author;
    _id: string;
    comments: {
      name: string;
      email: string;
      comment: string;
      _createdAt: string;
    }[];
  } = await client.fetch(query);
  // console.log(blog);

  return (
    <article className="px-2 mt-8 2xl:px-8 flex flex-col gap-y-8 bg-gradient-to-b from-black via-gray-800 to-gray-900">
      {/* Blog Title */}
      <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold text-black dark:text-white mt-12 ">
        {blog.title}
      </h1>
      {/* Featured Image */}
      {blog.image ? (
        <Image
          src={urlFor(blog.image).url()}
          alt={blog.title.toLowerCase()}
          width={500}
          height={500}
        />
      ) : (
        ""
      )}
      {/* Blog Summary Section */}
      <section>
        <h2 className="text-xl md:text-3xl font-bold uppercase ">
          {blog.title}
        </h2>
        <p className="text-base md:text-xl leading-relaxed text-justify text-black/80 dark:text-white/80">
          {blog.summary}
        </p>
      </section>
      {/* Author Section (Image & Bio) */}
      <section className="px-2 sm:px-8 md:px-12 flex gap-2 sm:gap-6 items-start md:items-center justify-start">
        <Image
          src={urlFor(blog.author.image).url()}
          alt={blog.author.name}
          width={200}
          height={200}
          className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-black dark:text-white">
            {blog.author.name}
          </h3>
          <p className="italic text-xs sm:text-sm md:text-base text-black/80 dark:text-white/80 ">
            {blog.author.bio}
          </p>
        </div>
      </section>
      {/* Main body of blog */}
      <section className="text-lg leading-normal text-black/80 dark:text-white/80">
        <PortableText value={blog.content} components={components} />
      </section>
      {/* comment section */}
      <section className="p-6 bg-transparent rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row md:space-x-4 gap-8">
          <div className="flex-1">
            <CommentSection _id={blog._id} />
          </div>
          <div className="flex-1 mt-4 md:mt-0 max-h-[410px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900">
            <h2 className="text-2xl font-semibold mb-4 text-white">Comments</h2>
            {blog.comments.length === 0 ? (
              <p className="text-white">
                No comments yet. Be the first to comment!
              </p>
            ) : (
              blog.comments.map((comment, index) => (
                <div
                  key={index}
                  className="mb-6 p-2 bg-transparent border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out mr-2"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xl font-semibold text-white">
                      {comment.name}
                    </span>
                    <span className="text-sm text-gray-400">
                      {new Date(comment._createdAt).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-lg text-gray-300">{comment.comment}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </article>
  );
}

export default BlogPage;
