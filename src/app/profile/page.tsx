import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `医師紹介｜${site.clinicName}`,
  description: `${site.name}の経歴と専門分野のご紹介。`,
};

const career = [
  { year: "2002年", event: "昭和大学医学部 卒業" },
  { year: "2002年", event: "昭和大学附属病院・関連病院 勤務" },
  { year: "2008年3月", event: "博士（医学） 昭和大学" },
  { year: "2009年", event: "昭和大学附属烏山病院 成人発達障害専門外来 担当" },
  { year: "2012年〜2014年", event: "UC Davis MIND Institute 留学（脳画像研究）" },
  { year: "2014年", event: "昭和大学附属烏山病院・発達障害医療研究所 勤務" },
  { year: "2019年", event: "昭和大学附属烏山病院 准教授" },
  { year: "2022年", event: "昭和大学発達障害医療研究所 所長" },
];

const qualifications = [
  "医学博士",
  "精神保健指定医",
  "日本精神神経学会 精神科指導医・精神科専門医",
  "日本医師会 認定産業医",
];

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-medium text-emerald-700">医師紹介</p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900">{site.name}</h1>
      <p className="mt-6 text-base leading-8 text-slate-600">
        昭和大学医学部を卒業後、昭和大学附属烏山病院を含む関連病院などに勤務し、成人の発達障害
        専門外来を担当している。発達障害の専門施設であるUC Davis MIND Instituteへの留学を経て
        現職に至る。
      </p>
      <p className="mt-4 text-base leading-8 text-slate-600">
        発達障害、とくに思春期以降の成人例に対する診療や研究に取り組んでいる。
      </p>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-slate-900">経歴</h2>
        <ol className="mt-6 space-y-4 border-l border-slate-200 pl-6">
          {career.map((item) => (
            <li key={item.year} className="relative">
              <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-emerald-600" />
              <p className="text-sm font-medium text-emerald-700">{item.year}</p>
              <p className="text-sm text-slate-700">{item.event}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-slate-900">資格・所属学会</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {qualifications.map((q) => (
            <li
              key={q}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
            >
              {q}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
