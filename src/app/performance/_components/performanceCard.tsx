import React from "react";
import {
  AspectRatio,
  Image,
  Box,
  Text,
  Center,
  GridItem,
} from "@yamada-ui/react";
import LinkButton from "./linkButton";

type CardProps = {
  title: string;
  image: string;
  alt: string;
  presentation?: string;
  page?: string;
};
function PerformanceCard(props: CardProps) {
  const { title, image, alt, presentation, page } = props;
  return (
    <GridItem
      w='full'
      shadow={"xl"}
      borderRadius={8}
      border={"1px solid #e2e8f0"}
    >
      <AspectRatio
        ratio={16 / 9}
        w={400}
        h={225}
        m={"auto"}
        mb={4}
        mt={2}
        border={"1px solid #e2e8f0"}
        shadow={"xl"}
        rounded={"xl"}
      >
        <Image src={image} alt={alt} width={400} height={225} />
      </AspectRatio>
      <Text fontSize='xl' fontWeight='bold' textAlign='center' mt={5} mb={2}>
        {title}
      </Text>
      <LinkButton presentation={presentation!} page={page!} />
    </GridItem>
  );
}

export default PerformanceCard;
