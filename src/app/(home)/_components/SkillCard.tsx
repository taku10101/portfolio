import { Text, Card, Flex, Box } from "@yamada-ui/react";
import SkillSetIcon from "./SkillSetIcon";

export async function SkillSetCard() {
  return (
    <Box>
      <Card
        sx={{
          height: "500px",
          p: 4,
          boxShadow: "lg",
          borderRadius: "lg",
        }}
      >
        <Text
          sx={{
            fontSize: "30px",
            textAlign: "left",
          }}
        >
          Coding Activity
        </Text>
        <Flex>
          <SkillSetIcon
            src='http://github-profile-summary-cards.vercel.app/api/cards/stats?username=taku10101&theme=github'
            alt='Summary'
          />
          <SkillSetIcon
            src='http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=taku10101&theme=github'
            alt='Repo per language'
          />
        </Flex>
        <SkillSetIcon
          src='http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=taku10101&theme=github'
          alt='Contribution details'
        />
      </Card>
    </Box>
  );
}
