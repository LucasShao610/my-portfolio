"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Home only matches exactly; other links also match nested routes
  // (e.g. /projects/my-app keeps "Projects" highlighted).
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

const linkClass = (href: string) =>
  isActive(href)
    ? "font-semibold underline underline-offset-8"
    : "opacity-70 hover:opacity-100";

  return (
    <header className="border-b border-gray-200">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold">
          Lucas Shao
        </Link>

        {/* Desktop links */}
        <ul className="hidden gap-6 text-sm md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={linkClass(link.href)}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

      {/* Mobile menu button */}
        <button
          type="button"
          className="rounded border px-3 py-1 text-sm md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile links */}
      {open && (
        <ul
          id="mobile-menu"
          className="space-y-1 border-t border-gray-200 px-6 py-3 text-sm md:hidden"
        >
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block py-2 ${linkClass(link.href)}`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}