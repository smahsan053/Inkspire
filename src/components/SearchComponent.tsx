"use client";
import React, { useEffect, useState, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../app/store";
import { fetchBlogs } from "../app/features/blogs/blogsSlice";
import { BlogType } from "../../typings";
import Link from "next/link";
import { useRouter } from "next/navigation";

function SearchComponent() {
  const [value, setValue] = useState("");
  const [searchResult, setSearchResult] = useState<BlogType[]>([]);
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();
  const { blogs } = useAppSelector((state) => state);

  const ref = useRef<HTMLLIElement>(null);
  const router = useRouter();
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  const validateSearch = (query: string) => {
    const valid = /^[a-zA-Z0-9\s]*$/.test(query);
    if (!valid) {
      setError("invalid Search character.");
      return false;
    }
    setError("");
    return true;
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;

    if (searchQuery !== "" && validateSearch(searchQuery)) {
      setValue(searchQuery);
      const searchResults = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
      );
      setSearchResult(searchResults);
    } else {
      setSearchResult([]);
      setValue("");
    }
  };
  const handleSubmit = () => {
    if (ref.current) {
      console.log(ref.current);
      ref.current.click();
    }
    console.log(ref.current);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <div className="relative flex flex-col items-center">
      <div className="flex items-center">
        <input
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          value={value}
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-md text-gray-800 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        {error && (
          <p className="absolute top-10" style={{ color: "red" }}>
            {error}
          </p>
        )}
        <button
          onClick={handleSubmit}
          className="absolute right-1 px-2 py-1 text-sm text-white bg-indigo-500 rounded-md hover:bg-indigo-600 active:bg-indigo-400"
        >
          Go
        </button>
      </div>
      <ul className="absolute w-full flex flex-col top-14 gap-2">
        {searchResult.map((result) => (
          <li
            key={result.slug}
            className="bg-indigo-500 w-full h-8 rounded-md flex pl-4 items-center"
            ref={ref}
            onClick={() => router.push(`/blog/${result.slug}`)}
          >
            <Link href={`blog/${result.slug}`}>
              {result.title
                .slice(0, 25)
                .concat(result.title.slice(20).length > 0 ? "..." : "")}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchComponent;
