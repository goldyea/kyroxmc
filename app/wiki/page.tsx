import type { FC } from "react";
import WikiProseBlock from "@/components/WikiProseBlock";

const Wiki: FC = () => {
  return (
    <WikiProseBlock>
      <h1>Kyrox</h1>
      <p>
        This is the wiki for the minecraft server Kyrox. In the wiki,
        you&apos;ll find guides and answers to your questions related to the
        server.
      </p>
    </WikiProseBlock>
  );
};

export default Wiki;
