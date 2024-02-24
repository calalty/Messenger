"use client";

import { Message } from "@/typings";
import { fetcher } from "@/utils/fetchMessages";
import React from "react";
import useSWR from "swr";
import { MessageComponent } from "./MessageComponent";

export const MessageList = () => {
  const { data: messages } = useSWR<Message[]>("/api/getMessages", fetcher);

  return (
    <ul className="space-y-5 px-5 pt-8 pb-32 max-w-2xl xl:max-w-4xl mx-auto">
      {messages?.map((message) => (
        <li key={message.id}>
          <MessageComponent message={message} />
        </li>
      ))}
    </ul>
  );
};
