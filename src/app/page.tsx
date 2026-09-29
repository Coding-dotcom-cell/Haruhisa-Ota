import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div>
      <section className="border-b border-slate-200 bg-gradient-to-b from-emerald-50 to-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-10 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-16">
          <div>
            <p className="text-sm font-medium leading-7 tracking-wide text-emerald-700">{site.department}</p>
            <div className="mt-5 flex items-center gap-5">
              <Image src="/profile-top.webp" alt={site.name} width={96} height={96} className="h-20 w-20 shrink-0 rounded-2xl object-cover shadow-sm sm:h-24 sm:w-24" priority />
              <h1 className="text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">{site.name}</h1>
            </div>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              ADHD・自閉スペクトラム症などの発達障害を専門とし、特に思春期以降の成人例に対する
              診療・研究に取り組んでいる。
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/services" className="rounded-full bg-emerald-700 px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-emerald-800">診療案内を見る</Link>
              <Link href="/profile" className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-medium text-slate-700 transition-colors hover:border-emerald-700 hover:text-emerald-700">経歴を見る</Link>
              <a href="#books" className="rounded-full px-4 py-3 text-sm font-medium text-emerald-700 underline decoration-emerald-300 underline-offset-4 hover:text-emerald-900">著書を見る</a>
            </div>
          </div>
          <figure className="min-w-0">
            <div className="rounded-sm bg-white p-3 shadow-lg ring-1 ring-slate-900/5 sm:p-4">
              <div className="relative aspect-[675/537] overflow-hidden bg-slate-100">
                <Image src="/sons-artwork.jpg" alt="息子が描いた、紫色のぶどうと黄色やオレンジ色の果物の絵" width={675} height={956} sizes="(min-width: 1024px) 500px, 100vw" className="absolute left-0 h-auto w-full max-w-none" style={{ top: "-24.3948%" }} priority />
              </div>
            </div>
            <figcaption className="mt-4 text-center text-sm leading-7 text-slate-600">息子が描いた、お気に入りの一枚</figcaption>
          </figure>
        </div>
      </section>

      <section id="books" aria-labelledby="books-heading" className="scroll-mt-24 border-b border-slate-200 bg-[#faf8f3]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:py-16 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-emerald-700">BOOKS</p>
            <h2 id="books-heading" className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">著書のご紹介</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">発達障害の理解と支援に関する著書をご紹介します。</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">仕事や生活での困りごとから、学生への支援まで。</p>
          </div>
          <figure className="min-w-0">
            <div className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-900/5">
              <div className="relative aspect-[720/537] overflow-hidden">
                <Image src="/books.jpg" alt="太田晴久の著書。大人の発達障害、職場の発達障害、発達障害のある学生を支援するプログラムなど" width={720} height={921} sizes="(min-width: 1024px) 620px, 100vw" className="absolute left-0 h-auto w-full max-w-none" style={{ top: "-27.0019%" }} />
              </div>
            </div>
            <figcaption className="mt-3 text-sm leading-7 text-slate-500">発達障害の診療・支援に関する著書</figcaption>
          </figure>
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
              body: "昭和医科大学発達障害医療研究所所長として、研究・人材育成にも力を注ぐ。",
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
