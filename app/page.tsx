import { ChatInput } from "@/components/ChatInput";

import { MessageList } from "@/components/MessageList";
import { Message } from "@/typings";
import { getServerSession } from "next-auth";

import { Providers } from "./providers";

const Home = async () => {
  const messages: Message[] = await fetch(
    `${process.env.VERCEL_URL || "http://localhost:3000/"}api/getMessages`,
    { cache: "no-store" }
  ).then((res) => res.json());

  const session = await getServerSession();

  return (
    <main>
      <Providers session={session}>
        <MessageList initialMessages={messages} />
        <ChatInput session={session} />
      </Providers>
    </main>
  );
};

export default Home;
