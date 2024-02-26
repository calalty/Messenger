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
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to fetch messages. Status: ${res.status}`);
      }
      return res.json();
    })
    .catch((error) => {
      // Log the error
      console.error("Error fetching messages:", error);
      // You can also throw the error again if you want to propagate it further
      // throw error;
    });

  // Rest of your code that uses 'messages'

  return (
    <Providers session={session}>
      <main>
        <MessageList initialMessages={messages} />
        <ChatInput session={session} />
      </main>
    </Providers>
  );
};

export default Home;
