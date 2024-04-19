import React from "react";
import { Image, Text } from "@yamada-ui/react";

type SkillSetIconProps = {
  label: string;
  src: string;
  alt: string;
};
const SkillSetIcon = (props: SkillSetIconProps) => {
  const { label, src, alt } = props;
  return (
    <>
      <Text>{label} </Text>
      <Image src={src} alt={alt} />
    </>
  );
};

export default SkillSetIcon;
