import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        <div>
          <p className="text-base font-semibold text-slate-900">{site.clinicName}</p>
          <p className="mt-1 text-sm text-slate-500">{site.department}</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-emerald-700">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-slate-200 px-6 py-4 text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} {site.clinicName}. All rights reserved.
      </div>
    </footer>
  );
}
