export const metadata = { title: "About | Your Name" };

export default function AboutPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold">About me</h1>
      <p className="mt-4 text-gray-600">
        blah blah blah
      </p>
      <h2 className="mt-8 text-xl font-semibold">Skills</h2>
      <p className="mt-2 text-gray-600">
        TypeScript, React, Node.js, Python, SQL, Git
      </p>
      <a href="/cv.pdf" className="mt-8 inline-block underline">
        Download my CV
      </a>
    </section>
  );
}