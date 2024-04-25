"use client";
import { Profile } from "./_components/Profile";
import { SkillSet } from "./_components/SkillSet";
import { Avatar } from "@yamada-ui/react";
export default function Home() {
  return (
    <>
      <Profile />
      <SkillSet />
    </>
  );
}
