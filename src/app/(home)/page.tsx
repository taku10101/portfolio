import { CommunityCard } from "./_components/CommunityCard";
import { Profile } from "./_components/ProfileCard";
import { SkillSet } from "./_components/SkillSetCard";
import { Box, Flex } from "@yamada-ui/react";
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
        <SkillSet />
      </Flex>
      <CommunityCard />
    </Box>
  );
}
