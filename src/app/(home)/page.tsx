import { Box, Flex } from "@yamada-ui/react";
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
      <Flex>
        <SkillSetIcon
          label='Top Languages'
          src='http://github-profile-summary-cards.vercel.app/api/cards/stats?username=taku10101&theme=github'
          alt='Summary'
        />
        <SkillSetIcon
          label='Commit Activity'
          src='http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=taku10101&theme=github'
          alt='Repo per language'
        />
      </Flex>
      <SkillSetIcon
        label='Contribution in the last year'
        src='http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=taku10101&theme=github'
        alt='Postgres'
      />
      <h3>Contributing</h3>
      <a href='https://github.com/yamada-ui/yamada-ui'>Yamada UI</a>
    </Box>
  );
}
