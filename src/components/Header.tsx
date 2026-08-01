import Link from "next/link";
import { nav } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-end px-6 py-4">
        <nav className="hidden gap-8 text-sm font-medium text-slate-600 sm:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-emerald-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <nav className="flex gap-4 overflow-x-auto border-t border-slate-100 px-6 py-2 text-sm font-medium text-slate-600 sm:hidden">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap transition-colors hover:text-emerald-700"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
