export const metadata = { title: "Contact | Your Name" };

export default function ContactPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-4 text-gray-600">
        I'd love to hear from you. The best way to reach me is by email.
      </p>
      <ul className="mt-6 space-y-2">
        <li><a className="underline" href="mailto:yayu610@gmail.com">yayu610@gmail.com</a></li>
        <li><a className="underline" href="https://github.com/LucasShao610">GitHub</a></li>
        <li><a className="underline" href="https://linkedin.com/in/lucas-shao-a91b53254">LinkedIn</a></li>
      </ul>
    </section>
  );
}