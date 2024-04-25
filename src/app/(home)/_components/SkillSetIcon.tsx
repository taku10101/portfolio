"use client";
import { Image, Box } from "@yamada-ui/react";

type SkillSetIconProps = {
  src: string;
  alt: string;
};
function SkillSetIcon(props: SkillSetIconProps) {
  const { src, alt } = props;
  return (
    <Box>
      <Image src={src} alt={alt} />
    </Box>
  );
}

export default SkillSetIcon;
