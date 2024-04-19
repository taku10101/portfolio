import { Flex, Button, Link } from "@yamada-ui/react";

type LinkButtonProps = {
  presentation?: string;
  page: string;
};
const LinkButton = (props: LinkButtonProps) => {
  const { presentation, page } = props;
  return (
    <Flex gap='md'>
      {presentation && (
        <Link href={presentation} isExternal>
          <Button textAlign='center' mt={2} mb={4} w={240}>
            プレゼンテーション資料へ
          </Button>
        </Link>
      )}

      <Link href={page} isExternal>
        <Button textAlign='center' mt={2} mb={4} w={240}>
          詳細ページへ
        </Button>
      </Link>
    </Flex>
  );
};

export default LinkButton;
