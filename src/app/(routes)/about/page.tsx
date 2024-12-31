import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen mt-8 bg-gradient-to-b from-black via-gray-800 to-gray-900 text-zinc-400 -z-50">
      <main className="container mx-auto px-8 py-12">
        <h1 className="text-4xl font-semibold text-center mb-6 mt-6">
          About Inkspire
        </h1>

        <section className="max-w-3xl mx-auto">
          <p className="text-lg mb-4">
            Welcome to Inkspire, a space where ideas and creativity come to life
            through written words. Whether you&apos;re an aspiring writer, a
            professional blogger, or just someone who loves to explore new
            topics, Inkspire offers a platform to express yourself and share
            your thoughts with the world.
          </p>

          <p className="text-lg mb-4">
            The goal of Inkspire is to provide a simple, clean, and
            user-friendly platform for bloggers to create, publish, and share
            their work. Here, you’ll find a variety of articles ranging from
            lifestyle and technology to self-improvement and creativity.
          </p>

          <p className="text-lg mb-6">
            Whether you’re looking to inspire others or gain new insights,
            Inkspire is the perfect place to fuel your passion for writing and
            connecting with like-minded individuals.
          </p>

          <h2 className="text-3xl font-semibold mb-4">Who Am I?</h2>
          <p className="text-lg mb-4">
            I’m Ahsan, the creator of Inkspire. With a deep passion for writing
            and a love for storytelling, I started this blog to create a
            community where we can all share our ideas and inspire each other.
            Join me on this journey, and let’s write the future together!
          </p>

          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-lg mb-4">
            Have any questions or just want to chat? Feel free to reach out
            through{" "}
            <Link
              href="mailto:syedmahsan053@gmail.com"
              className="text-indigo-500 hover:underline"
            >
              mail
            </Link>
            .
          </p>
        </section>
      </main>

    
    </div>
  );
}
