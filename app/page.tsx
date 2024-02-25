import { ChatInput } from "@/components/ChatInput";

import { MessageList } from "@/components/MessageList";

import { getServerSession } from "next-auth";

import { Providers } from "./providers";
import { Message } from "@/typings";

const Home = async () => {
  const session = await getServerSession();

  const messages: Message[] = await fetch(
    `${process.env.VERCEL_URL}api/getMessages`,
    { cache: "no-store" }
  ).then((res) => res.json());

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
