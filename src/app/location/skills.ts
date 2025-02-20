export const skillDetails: Record<
  string,
  { description: string; experience: string; projects: string[]; level: string }
> = {
  "React/Next": {
    description: "メイン領域",
    experience: "1年以上",
    projects: [
      "様々な企業ので業務",
      "大手インターンシップ",
      "シングルページアプリケーション (SPA)",
      "PWAを用いたpush通知の実装",
    ],
    level: "中級",
  },
  Typescript: {
    description: "メイン言語",
    experience: "1年以上",
    projects: ["業務におけるWeb開発"],
    level: "中級",
  },

  "Ruby on Rails": {
    description: "バックエンド開発",
    experience: "1年未満",
    projects: ["個人開発", "業務におけるWeb開発"],
    level: "中級",
  },
  "Laravel/PHP": {
    description: "バックエンド開発",
    experience: "1年未満",
    projects: ["個人開発", "業務におけるWeb開発"],
    level: "中級",
  },
};

export const skills = Object.keys(skillDetails);
