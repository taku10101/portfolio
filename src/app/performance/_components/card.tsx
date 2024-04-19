import React from "react";
import {
  AspectRatio,
  Container,
  Image,
  Box,
  Text,
  Link,
  Flex,
  Button,
} from "@yamada-ui/react";
import LinkButton from "./linkButton";

type CardProps = {
  title: string;
  image: string;
  alt: string;
  presentation?: string;
  page: string;
};
const Card = (props: CardProps) => {
  const { title, image, alt, presentation, page } = props;
  return (
    <Container centerContent>
      <AspectRatio w='md' ratio={6 / 4}>
        <Image src={image} alt={alt} />
      </AspectRatio>

      <Box>
        <Text fontSize='xl' fontWeight='bold' textAlign='center' mt={2} mb={2}>
          {title}
        </Text>
      </Box>

      <LinkButton presentation={presentation!} page={page} />
    </Container>
  );
};

export default Card;
