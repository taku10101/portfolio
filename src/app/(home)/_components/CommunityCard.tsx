import { Card, Text, Box, Avatar, Flex } from "@yamada-ui/react";
import React from "react";

export function CommunityCard() {
  return (
    <Box>
      <Card
        sx={{
          p: 6,
          height: "550px",
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
          Community Activity
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
            <Text
              sx={{
                ml: 7,
                fontSize: "30px",
              }}
            >
              hack hack
            </Text>
          </Flex>
          <Text
            sx={{
              mt: 4,
              mx: 2,
              fontSize: "25px",
            }}
          >
            hack hack とは
          </Text>
          <Text
            sx={{
              mt: 4,
              mx: 4,
              fontSize: "20px",
            }}
          >
            hack hack は、ハッカソン好きを中心に集まるコミュニティです。
            <br />
            2023年夏に設立され、現在メンバーは220人を超えています。
            <br />
            discordサーバーにて、ハッカソンやイベントごとの情報共有、ハッカソンのチーム募集などを行っています。
          </Text>

          <Text
            sx={{
              mt: 6,
              mx: 2,
              fontSize: "25px",
            }}
          >
            代表としての功績
          </Text>
          <Text
            sx={{
              mt: 4,
              mx: 4,
              fontSize: "20px",
            }}
          >
            ・TechTrain,Progateなどとのアンバサダー契約の提携による各サービスの無料提供
            <br />
            ・MatsuribaTech主催のカンファレンスにおけるブース展示
            <br />
            ・50名以上のメンバー勧誘
            <br />
            ・就活生向けの交流イベントの開催
          </Text>
        </Box>
      </Card>
    </Box>
  );
}
