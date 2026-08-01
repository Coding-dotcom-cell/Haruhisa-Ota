import Link from "next/link";
import { site } from "@/lib/site";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div>
      <section className="border-b border-slate-200 bg-gradient-to-b from-emerald-50 to-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-20 sm:py-28">
          <p className="text-sm font-medium tracking-wide text-emerald-700">
            {site.department}
          </p>
          <h1 className="max-w-2xl text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            {site.name}
          </h1>
          <p className="max-w-xl text-base leading-8 text-slate-600">
            ADHD・自閉スペクトラム症などの発達障害を専門とし、特に思春期以降の成人例に対する
            診療・研究に取り組んでいる。
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/services"
              className="rounded-full bg-emerald-700 px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-emerald-800"
            >
              診療案内を見る
            </Link>
            <Link
              href="/profile"
              className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-medium text-slate-700 transition-colors hover:border-emerald-700 hover:text-emerald-700"
            >
              経歴を見る
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "成人発達障害の専門診療",
              body: "思春期以降のADHD・自閉スペクトラム症などについて専門的に対応する。",
            },
            {
              title: "脳画像・臨床研究",
              body: "UC Davis MIND Instituteでの研究経験を活かし、発達障害の脳科学的研究に取り組む。",
            },
            {
              title: "研究・教育活動",
              body: "昭和医科大学発達障害医療研究所所長として、研究・人材育成にも力を注いでいる。",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">お知らせ</h2>
            <Link href="/blog" className="text-sm font-medium text-emerald-700 hover:underline">
              一覧を見る
            </Link>
          </div>
          <ul className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex flex-col gap-1 px-6 py-4 transition-colors hover:bg-emerald-50 sm:flex-row sm:items-center sm:gap-6"
                >
                  <span className="text-sm text-slate-400">{post.date}</span>
                  <span className="text-sm font-medium text-slate-800">{post.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
