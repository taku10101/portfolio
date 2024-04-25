import { Box, Card, Center, Text } from "@yamada-ui/react";
import React from "react";
import SkillSetIcon from "./SkillSetIcon";

export function UseLang() {
  return (
    <Box>
      <Card
        sx={{
          margin: "auto",
          p: 4,
          boxShadow: "lg",
          borderRadius: "lg",
          width: "650px",
        }}
      >
        <Text
          sx={{
            fontSize: "30px",
            textAlign: "left",
            mb: 2,
          }}
        >
          Lang & Framework
        </Text>
        <Text sx={{ fontSize: "20px", mb: 1 }}>frontend</Text>
        <SkillSetIcon
          src='https://skillicons.dev/icons?i=ts,react,nextjs,graphql,apollo,sass,tailwind,materialui'
          alt='frontend_lang&framework'
        />
        <Text sx={{ fontSize: "20px", mt: 3, mb: 1 }}>backend</Text>

        <SkillSetIcon
          src='https://skillicons.dev/icons?i=ts,nodejs,nestjs,express,postgres,prisma,go,ruby,rails,py,django'
          alt='backend_lang&framework'
        />
      </Card>
    </Box>
  );
}
