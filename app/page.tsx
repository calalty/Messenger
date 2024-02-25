import { ChatInput } from "@/components/ChatInput";

import { MessageList } from "@/components/MessageList";

import { getServerSession } from "next-auth";

import { Providers } from "./providers";

const Home = async () => {
  const session = await getServerSession();

  return (
    <main>
      <Providers session={session}>
        <MessageList />
        <ChatInput session={session} />
      </Providers>
    </main>
  );
};

export default Home;
