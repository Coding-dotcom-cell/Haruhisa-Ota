export const site = {
  name: "太田晴久",
  clinicName: "太田晴久",
  department: "昭和医科大学准教授・発達障害医療研究所所長",
  tagline: "発達障害の専門診療と研究に取り組んでいます。",
} as const;

export const nav = [
  { href: "/", label: "トップ" },
  { href: "/profile", label: "医師紹介" },
  { href: "/services", label: "診療案内" },
  { href: "/blog", label: "お知らせ" },
] as const;
