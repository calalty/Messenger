import { ChatInput } from "@/components/ChatInput";

import { MessageList } from "@/components/MessageList";

import { getServerSession } from "next-auth";

import { Providers } from "./providers";
import { Message } from "@/typings";

export const dynamic = "force-dynamic";

const Home = async () => {
  try {
    const session = await getServerSession();

    // Log the session to check if it's obtained successfully
    console.log("Session:", session);

    const apiUrl = `${process.env.VERCEL_URL}api/getMessages`;

    // Log the API URL to check its correctness
    console.log("API URL:", apiUrl);

    const response = await fetch(apiUrl, { cache: "no-store" });

    // Log the raw response for inspection
    console.log("Raw Response:", response);

    const messages: Message[] = await response.json();

    // Log the messages to check if they are retrieved successfully
    console.log("Messages:", messages);

    return (
      <main>
        <Providers session={session}>
          <MessageList initialMessages={messages} />
          <ChatInput session={session} />
        </Providers>
      </main>
    );
  } catch (error) {
    console.error("Error in Home component:", error);
    throw error;
  }
};

export default Home;
