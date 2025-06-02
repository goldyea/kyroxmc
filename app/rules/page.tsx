import type { FC } from "react";
import type { Metadata } from "next";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";

export const metadata: Metadata = {
  title: "Kyrox - Rules",
  description: "Rules for the KyroxMC minecraft server",
};

const Rules: FC = () => {
  return (
    <main className="flex h-screen items-center justify-center">
      <h1 className="text-center font-minecraftia text-3xl">
        <TextGenerateEffect words={"The section is under development..."} />
      </h1>
    </main>
  );
};

export default Rules;
