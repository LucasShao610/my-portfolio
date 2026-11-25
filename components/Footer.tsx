export default async function Footer() {
    "use cache";
  return (
    <footer className="mt-16 border-t border-gray-200 py-6 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} Lucas Shao. All rights reserved.
    </footer>
  );
}
