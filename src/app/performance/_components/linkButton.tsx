import { Flex, Button, Link, Box, Center } from "@yamada-ui/react";

type LinkButtonProps = {
  presentation?: string;
  page: string;
};
const LinkButton = (props: LinkButtonProps) => {
  const { presentation, page } = props;
  return (
    <Center gap='md' m={"auto"} textAlign={"center"}>
      {presentation && (
        <Box>
          <Link href={presentation} isExternal>
            <Button textAlign='center' mt={2} mb={4} w={240}>
              プレゼンテーション資料へ
            </Button>
          </Link>
        </Box>
      )}

      <Box>
        <Link href={page} isExternal>
          <Button textAlign='center' mt={2} mb={4} w={240}>
            詳細ページへ
          </Button>
        </Link>
      </Box>
    </Center>
  );
};

export default LinkButton;
