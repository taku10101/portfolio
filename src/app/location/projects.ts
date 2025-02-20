import recall from "@/app/public/Recall.png";
import park from "@/app/public/park.png";
import { StaticImageData } from "next/image";

export const projects: {
  title: string;
  desc: string;
  image: StaticImageData;
  link: string;
}[] = [
  {
    title: "Recall MATE",
    desc: "暗記学習支援",
    image: recall,
    link: "https://www.canva.com/design/DAGBdSZKfMU/c0IKdJ9cHUcE20wlSmgCOA/view?utm_content=DAGBdSZKfMU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h70875a3ec9",
  },
  {
    title: "ArticlePark",
    desc: "技術記事の問題作成",
    image: park,
    link: "https://www.canva.com/design/DAF5wtz8EfU/aKfka224f869cqN_uGbWUw/view?utm_content=DAF5wtz8EfU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hae03023a01",
  },
];
