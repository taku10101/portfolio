import Image from "next/image";
import { Grid, Box } from "@yamada-ui/react";
import SkillSetIcon from "@/app/(home)/_components/SkillSetIcon";
export default function Home() {
  return (
    <Box>
      <SkillSetIcon
        label='Frontend'
        src='https://skillicons.dev/icons?i=ts,react,nextjs,graphql,apollo,sass,tailwind,materialui'
        alt='React'
      />
      <SkillSetIcon
        label='Backend'
        src='https://skillicons.dev/icons?i=ts,nodejs,nestjs,express,postgres,prisma,go,ruby,rails,py,django'
        alt='Node.js'
      />
      <h3>Contributing</h3>
      <a href='https://github.com/yamada-ui/yamada-ui'>Yamada UI</a>
    </Box>
  );
}
