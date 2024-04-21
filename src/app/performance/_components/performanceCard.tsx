import React from "react";
import { AspectRatio, Image, Box, Text, Center } from "@yamada-ui/react";
import LinkButton from "./linkButton";

type CardProps = {
  title: string;
  image: string;
  alt: string;
  presentation?: string;
  page?: string;
};
const PerformanceCard = (props: CardProps) => {
  const { title, image, alt, presentation, page } = props;
  return (
    <Box
      w={600}
      border={"1px solid #e2e8f0"}
      p={4}
      shadow={"xl"}
      borderRadius={"md"}
      textAlign={"center"}
      m={"auto"}
    >
      <AspectRatio
        ratio={16 / 9}
        w={400}
        h={225}
        m={"auto"}
        mb={4}
        mt={2}
        shadow={"xl"}
      >
        <Image src={image} alt={alt} width={400} height={225} />
      </AspectRatio>
      <Text fontSize='xl' fontWeight='bold' textAlign='center' mt={5} mb={2}>
        {title}
      </Text>
      <LinkButton presentation={presentation!} page={page!} />
    </Box>
  );
};

export default PerformanceCard;
