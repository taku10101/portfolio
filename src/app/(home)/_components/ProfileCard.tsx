import { Avatar, Box, Card, Center, Flex, Text } from "@yamada-ui/react";
import Link from "next/link";
import React from "react";

export const Profile = () => {
  const profile = [
    {
      label: "得意領域",
      value: "フロントエンド",
    },
    {
      label: "所属団体",
      value: "MatsuribaTech 運営、hack hack 代表",
    },
    {
      label: "GitHub",
      value: "taku10101",
      link: "https://github.com/taku10101",
    },
    {
      label: "Twitter",
      value: "@taku10101",
      link: "https://twitter.com/taku10101",
    },
  ];

  return (
    <Center>
      <Card
        sx={{
          height: "500px",
          width: "500px",
          p: 6,
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
          Profile
        </Text>
        <Flex
          sx={{
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Avatar
            src='https://avatars.githubusercontent.com/u/109452865?v=4'
            alt='icon'
            size='xl'
            sx={{
              mb: 4,
            }}
          />
          <Text
            sx={{
              pl: 4,
              fontSize: "28px",
            }}
          >
            たく坊
          </Text>
        </Flex>

        <Box
          sx={{
            mt: 4,
            textAlign: "left",
          }}
        >
          {profile.map((item) => (
            <Link key={item.label} href={item.link || "#"}>
              <Flex
                sx={{
                  mt: 2,
                  alignItems: "center",
                }}
              >
                <Text
                  sx={{
                    fontSize: "25px",
                    ml: 2,
                  }}
                >
                  {item.label}
                </Text>
                <Text
                  sx={{
                    fontSize: "20px",
                    ml: 2,
                  }}
                >
                  {item.value}
                </Text>
              </Flex>
            </Link>
          ))}
        </Box>
      </Card>
    </Center>
  );
};
