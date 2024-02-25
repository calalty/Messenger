import { ChatInput } from "@/components/ChatInput";

import { MessageList } from "@/components/MessageList";
import { Message } from "@/typings";
import { getServerSession } from "next-auth";

import { Providers } from "./providers";

const Home = async () => {
  const session = await getServerSession();

  console.log({ session });
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
