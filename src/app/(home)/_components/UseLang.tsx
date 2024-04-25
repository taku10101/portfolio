import { Box } from "@yamada-ui/react";
import React from "react";
import SkillSetIcon from "./SkillSetIcon";

export const UseLang = () => {
  return (
    <Box>
      <SkillSetIcon
        label='Frontend'
        src='https://skillicons.dev/icons?i=ts,react,nextjs,graphql,apollo,sass,tailwind,materialui'
        alt='frontend_lang&framework'
      />
      <SkillSetIcon
        label='Backend'
        src='https://skillicons.dev/icons?i=ts,nodejs,nestjs,express,postgres,prisma,go,ruby,rails,py,django'
        alt='backend_lang&framework'
      />
    </Box>
  );
};
