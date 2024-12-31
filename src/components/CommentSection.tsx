"use client";

import React, { useState } from "react";

export default function CommentSection({ _id }: { _id: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
    _id,
  });
  console.log(_id);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your submission logic here, e.g., API call
    fetch("/api/createComment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify JSON content type
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        setFormData({
          name: "",
          email: "",
          comment: "",
          _id,
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse the JSON response
      })
      .then((data) => {
        console.log("Comment submitted successfully:", data);
      })
      .catch((error) => {
        console.error("Error submitting comment:", error);
      });
  };

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Leave a Comment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            maxLength={50}
            className="mt-1 block w-full p-2 bg-transparent border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 bg-transparent border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="comment"
            className="block text-sm font-medium text-white"
          >
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            rows={4}
            minLength={1}
            maxLength={500}
            placeholder="Write your comment here"
            value={formData.comment}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 bg-transparent border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>
        <input type="hidden" name="_id" value={_id} />
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 active:bg-indigo-500"
        >
          Submit
        </button>
      </form>
    </>
  );
}
