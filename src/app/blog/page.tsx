import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: `お知らせ｜${site.clinicName}`,
  description: `${site.clinicName}からのお知らせ一覧。`,
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-medium text-emerald-700">お知らせ</p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900">お知らせ一覧</h1>

      <ul className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="block px-6 py-5 transition-colors hover:bg-emerald-50"
            >
              <p className="text-xs text-slate-400">{post.date}</p>
              <p className="mt-1 text-base font-medium text-slate-800">{post.title}</p>
              <p className="mt-1 text-sm text-slate-500">{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
