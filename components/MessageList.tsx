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

export const MessageList = ({ initialMessages }: Props) => {
  const { data: messages, mutate } = useSWR<Message[]>(
    "/api/getMessages",
    fetcher
  );

  useEffect(() => {
    const channel = clientPusher.subscribe("messages");

    channel.bind("new-message", async (data: Message) => {
      if (messages?.find((message) => message.id === data.id)) return;

      if (!messages) {
        mutate(fetcher);
      } else {
        mutate(fetcher, {
          optimisticData: [data, ...messages!],
          rollbackOnError: true,
        });
      }
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages, mutate]);

  return (
    <ul className="space-y-5 px-5 pt-8 pb-32 max-w-2xl xl:max-w-4xl mx-auto">
      {(messages ?? initialMessages)?.map((message) => (
        <li key={message.id}>
          <MessageBubble message={message} />
        </li>
      ))}
    </ul>
  );
};
