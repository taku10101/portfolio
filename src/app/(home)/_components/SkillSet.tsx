import { Box, Flex } from "@yamada-ui/react";
import SkillSetIcon from "./SkillSetIcon";

export const SkillSet = () => {
  return (
    <Box>
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
        alt='Contribution details'
      />
      <h3>Contributing</h3>
      <a href='https://github.com/yamada-ui/yamada-ui'>Yamada UI</a>
    </Box>
  );
};
