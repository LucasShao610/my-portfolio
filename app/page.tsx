import Link from "next/link";

export default function Home() {
  return (
    <section>
      <h1 className="text-4xl font-bold">Greetings!</h1>
      <p className="mt-4 text-lg text-gray-600">
        Computer science graduate seeking employment.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/projects"
          className="rounded bg-black px-5 py-2 text-white"
        >
          View my projects
        </Link>
        <Link href="/contact" className="rounded border px-5 py-2">
          Get in touch
        </Link>
      </div>
    </section>
  );
}