"use client";

import { Message } from "@/typings";
import { fetcher } from "@/utils/fetchMessages";
import React, { useEffect } from "react";
import useSWR from "swr";
import { clientPusher } from "@/pusher";
import { MessageBubble } from "./MessageBubble";

type Props = {
  initialMessages?: Message[];
};

export const MessageList = async ({ initialMessages }: Props) => {
  const messages = await fetcher();

  return (
    <ul className="space-y-5 px-5 pt-8 pb-32 max-w-2xl xl:max-w-4xl mx-auto">
      {messages?.map((message) => (
        <li key={message.id}>
          <MessageBubble message={message} />
        </li>
      ))}
    </ul>
  );
};
