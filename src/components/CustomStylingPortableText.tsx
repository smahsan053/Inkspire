import { PortableTextComponents } from "@portabletext/react";
import Image from "next/image";

export const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-5xl font-bold mb-6 mt-8">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-4xl font-semibold mb-5 mt-7">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-3xl font-medium mb-4 mt-6">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-2xl font-bold mb-3 mt-5">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-xl font-medium mb-3 mt-4">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-lg font-normal mb-3 mt-3">{children}</h6>
    ),
    normal: ({ children }) => (
      <p className="text-base leading-8 mb-4">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-500 pl-6 italic text-gray-600 mb-4">
        {children}
      </blockquote>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-800 text-white p-6 rounded-md shadow-md overflow-x-auto my-4">
        <code className="font-mono text-sm whitespace-pre-wrap">
          {children}
        </code>
      </pre>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 space-y-3">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 space-y-3">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="ml-3">{children}</li>,
    number: ({ children }) => <li className="ml-3">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <span className="underline">{children}</span>,
    code: ({ children }) => (
      <code className="bg-gray-700 rounded px-1 text-sm font-mono text-white shadow-md overflow-x-auto my-4">
        {children}
      </code>
    ),
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline hover:text-blue-700"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      const { asset, alt } = value || {};
      const url = asset?.url;
      return (
        url && (
          <div className="relative w-full max-w-3xl mx-auto my-6">
            <Image
              src={url}
              alt={alt || "Image"}
              layout="responsive"
              width={800}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        )
      );
    },
  },
};
