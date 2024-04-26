import { CommunityCard } from "./_components/CommunityCard";
import { Profile } from "./_components/ProfileCard";
import { Box, Flex } from "@yamada-ui/react";
import { SkillSetCard } from "./_components/SkillCard";

export default function Home() {
  return (
    <Box
      sx={{
        mt: 4,
        width: "1250px",
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
        gap={4}
      >
        <Profile />
        <SkillSetCard />
      </Flex>
      <Box sx={{ m: "auto", mt: 4 }}>
        <CommunityCard />
      </Box>
    </Box>
  );
}
