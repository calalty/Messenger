import { serverPusher } from "@/pusher";
import redis from "../../../redis";
import { Message } from "@/typings";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { message } = await request.json();

  const newMessage: Message = {
    ...message,
    created_at: Date.now(),
  };

  await redis.hset("messages", message.id, JSON.stringify(newMessage));
  serverPusher.trigger("messages", "new-message", newMessage);

  return NextResponse.json({ message: newMessage });
}
