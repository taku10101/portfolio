export const skillDetails: Record<
  string,
  { description: string; experience: string; projects: string[]; level: string }
> = {
  JavaScript: {
    description:
      "モダンなウェブ開発の中心となる言語です。ES6+の機能を活用し、非同期プログラミングやモジュール化されたコードの作成に熟練しています。",
    experience: "5年以上",
    projects: [
      "インタラクティブなウェブアプリケーション",
      "シングルページアプリケーション (SPA)",
    ],
    level: "上級",
  },
  React: {
    description:
      "コンポーネントベースのUI構築に特化したライブラリです。Hooksを活用し、効率的で再利用可能なコンポーネントの設計と実装ができます。",
    experience: "4年",
    projects: ["大規模なeコマースプラットフォーム", "社内管理ツール"],
    level: "上級",
  },
  "Node.js": {
    description:
      "サーバーサイドJavaScriptの実行環境として使用しています。RESTful APIの構築やデータベース操作、ファイル処理などのバックエンド開発に活用しています。",
    experience: "3年",
    projects: ["APIサーバー", "リアルタイムチャットアプリケーション"],
    level: "中級",
  },
  // 他のスキルも同様に追加...
};

export const skills = Object.keys(skillDetails);
