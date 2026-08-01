import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { site } from "@/lib/site";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPostBySlug(slug);
    return {
      title: `${post.title}｜${site.clinicName}`,
      description: post.excerpt,
    };
  } catch {
    return { title: `お知らせ｜${site.clinicName}` };
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/blog" className="text-sm text-emerald-700 hover:underline">
        ← お知らせ一覧へ戻る
      </Link>
      <p className="mt-6 text-xs text-slate-400">{post.date}</p>
      <h1 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">{post.title}</h1>
      <div
        className="prose-clinic mt-8"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </div>
  );
}
