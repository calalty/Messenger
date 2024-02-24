"use client";

import { v4 as uuid } from "uuid";
import { FormEvent, useState } from "react";
import { Button } from "./Button";
import { Message } from "@/typings";
import useSWR from "swr";
import { fetcher } from "@/utils/fetchMessages";

export const ChatInput = () => {
  const [input, setInput] = useState<string>();
  const {
    data: messages,
    error,
    mutate,
  } = useSWR<Message[]>("/api/getMessages", fetcher);

  console.log(messages);

  const addMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input) return;

    const messageToSend = input;

    setInput("");

    const id = uuid();

    const message: Message = {
      id,
      message: messageToSend,
      created_at: Date.now(),
      username: "Elon Musk",
      profilePic:
        "https://images.unsplash.com/photo-1647888774545-96f662a65e15",
      email: "callum.alton33@gmail.com",
    };

    const uploadMessageToUpstash = async () => {
      const data = await fetch("/api/addMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      }).then((res) => res.json());

      return [data.message, ...messages!];
    };

    await mutate(uploadMessageToUpstash, {
      optimisticData: [message, ...messages!],
      rollbackOnError: true,
    });
  };

  return (
    <form
      onSubmit={addMessage}
      className="fixed bottom-0 z-50 w-full flex px-10 py-5 border-t border-gray-100 items-center bg-white"
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Enter message here..."
        className="flex-1 rounded-3xl border-[#1e004850] border-[1px] focus:outline-none focus:ring-1 focus:ring-[#1e0048] focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed placeholder-[#1e004850]"
      />

      <Button
        additionalClassName="ml-[-5rem] mt-[-0.25rem] px-5 py-[0.70rem]"
        type="submit"
        text="Send"
        disabled={!input}
      />
    </form>
  );
};
