import { Message } from "@/typings";

export const fetcher = async () => {
  try {
    const timestamp = new Date().getTime();
    const res = await fetch(`/api/getMessages?timestamp=${timestamp}`);
    console.log("Response Status:", res.status);
    console.log("Response Headers:", res.headers);
    const data = await res.json();
    const messages: Message[] = data;

    return messages;
  } catch (error) {
    console.error("Fetch Error:", error);
    throw error;
  }
};
