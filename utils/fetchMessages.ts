import { Message } from "@/typings";

export const fetcher = async () => {
  const res = await fetch("/api/getMessages");
  const data = await res.json();
  const messages: Message[] = data;

  console.log('FETCHER'{messages})
  return messages;
};
