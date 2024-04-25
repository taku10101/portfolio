import { Card, Text, Box, Avatar, Flex } from "@yamada-ui/react";
import React from "react";

export const CommunityCard = () => {
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

        <Box
          sx={{
            mt: 4,
          }}
        >
          <Flex
            sx={{
              mx: 4,
              alignItems: "center",
              width: "80%",
            }}
          >
            <Avatar src='/hack.png' alt='icon' size='xl' />
            <Text>hack hack</Text>
          </Flex>
        </Box>
      </Card>
    </Box>
  );
};
