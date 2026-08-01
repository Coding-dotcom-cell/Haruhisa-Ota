import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `診療案内｜${site.clinicName}`,
  description: `${site.clinicName}の専門分野・対応疾患のご案内。`,
};

const departments = [
  {
    title: "成人発達障害専門外来",
    body: "ADHD・自閉スペクトラム症など、思春期以降の成人例を中心に対応しています。",
  },
  {
    title: "ADHD",
    body: "不注意・多動性・衝動性などの症状について、評価から治療まで対応します。",
  },
  {
    title: "自閉スペクトラム症",
    body: "対人関係やこだわりに関するご相談など、成人例を中心に診療しています。",
  },
  {
    title: "脳画像・認知神経科学研究",
    body: "発達障害の病態解明に向けた脳画像研究・臨床研究に取り組んでいます。",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-medium text-emerald-700">診療案内</p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900">専門分野・対応疾患</h1>

      <section className="mt-10 grid gap-6 sm:grid-cols-2">
        {departments.map((d) => (
          <div key={d.title} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-base font-semibold text-slate-900">{d.title}</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">{d.body}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 rounded-2xl bg-emerald-50 p-6">
        <h2 className="text-base font-semibold text-slate-900">ご予約・お問い合わせ</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          外来受診をご希望の方は、昭和大学附属烏山病院までお問い合わせください。
        </p>
      </section>
    </div>
  );
}
