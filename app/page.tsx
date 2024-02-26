import { ChatInput } from "@/components/ChatInput";

import { MessageList } from "@/components/MessageList";

import { getServerSession } from "next-auth";

import { Providers } from "./providers";
import { Message } from "@/typings";

const Home = async () => {
  const session = await getServerSession();

  const messages: Message[] = await fetch(
    `${process.env.APP_URL}/api/getMessages`,
    { cache: "no-store" }
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to fetch messages. Status: ${res.status}`);
      }
      return res.json();
    })
    .catch((error) => {
      console.error("Error fetching messages:", error);
    });

  return (
    <Providers session={session}>
      <main>
        {messages && <MessageList initialMessages={messages} />}
        <ChatInput session={session} />
      </main>
    </Providers>
  );
};

export default Home;
