import { CommunityCard } from "./_components/CommunityCard";
import { Profile } from "./_components/ProfileCard";
import { Box, Flex } from "@yamada-ui/react";
import { SkillSetCard } from "./_components/SkillCard";

export default function Home() {
  return (
    <Box
      sx={{
        mt: 4,
        width: "85vw",
        m: "auto",
        alignItems: "center",
        justifyContent: "between",
      }}
    >
      <Flex
        sx={{
          justifyContent: "between",
          mt: 4,
        }}
      >
        <Profile />
        <SkillSetCard />
      </Flex>
      <CommunityCard />
    </Box>
  );
}
