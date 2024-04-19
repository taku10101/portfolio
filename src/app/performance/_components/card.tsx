import React from "react";
import {
  AspectRatio,
  Container,
  Image,
  Box,
  Text,
  Link,
} from "@yamada-ui/react";

type CardProps = {
  title: string;
  image: string;
  alt: string;
  presentation?: string;
};
const Card = (props: CardProps) => {
  const { title, image, alt, presentation } = props;
  return (
    <Container centerContent>
      <AspectRatio w='lg' ratio={4 / 3}>
        <Image src={image} alt={alt} />
      </AspectRatio>

      <Box>
        <Text fontSize='xl' fontWeight='bold' textAlign='center' mt={4} mb={2}>
          {title}
        </Text>
      </Box>
      <Box>
        <Link href={presentation} isExternal>
          <Text textAlign='center' mt={2} mb={4}>
            プレゼンテーション資料へ
          </Text>
        </Link>
      </Box>
    </Container>
  );
};

export default Card;
