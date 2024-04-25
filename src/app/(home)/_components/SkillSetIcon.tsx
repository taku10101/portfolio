import { Image, Text, Box } from "@yamada-ui/react";

type SkillSetIconProps = {
  label: string;
  src: string;
  alt: string;
};
const SkillSetIcon = (props: SkillSetIconProps) => {
  const { label, src, alt } = props;
  return (
    <Box>
      <Text>{label} </Text>
      <Image src={src} alt={alt} />
    </Box>
  );
};

export default SkillSetIcon;
