"use client";

import { Message } from "@/typings";
import { useSession } from "next-auth/react";
import Image from "next/image";

import React, { useEffect, useState } from "react";
import TimeAgo from "react-timeago";
type Props = {
  message: Message;
};

export const MessageBubble = ({
  message: { message, username, created_at, email, color },
}: Props) => {
  const { data: session } = useSession();
  const isUser = session?.user?.email === email;

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, [isClient]);

  return (
    <div className={`flex w-fit ${isUser && "ml-auto"}`}>
      <div className={`flex-shrink-0 ${isUser && "order-2"}`}>
        <Image
          src={`https://robohash.org/${username}`}
          className="rounded-full bg-gray-100 border-[#84848450] border-[1px] mx-2"
          height={10}
          width={50}
          alt="Profile Picture"
        />
      </div>

      <div>
        <p
          style={{
            color: isUser ? "#848484" : color,
            textAlign: isUser ? "right" : "left",
          }}
          className="text-[0.65rem] px-[2px] pb-[2px]"
        >
          {username}
        </p>

        <div className="flex items-end">
          <div
            style={{ backgroundColor: isUser ? "#848484" : color }}
            className={`px-3 py-2 rounded-lg w-fit text-white ${
              isUser && "ml-auto order-2"
            } `}
          >
            <p>{message}</p>
          </div>

          <p
            className={`text-[0.65rem] italic px-2 text-gray-300 ${
              isUser && "text-right"
            }`}
          >
            <TimeAgo live date={new Date(created_at)} />
          </p>
        </div>
      </div>
    </div>
  );
};
