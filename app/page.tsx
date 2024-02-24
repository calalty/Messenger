import { ChatInput } from "@/components/ChatInput";
import { Header } from "@/components/Header";
import { MessageList } from "@/components/MessageList";

export default function Home() {
  return (
    <main>
      <Header />
      <MessageList />
      <ChatInput />
    </main>
  );
}
