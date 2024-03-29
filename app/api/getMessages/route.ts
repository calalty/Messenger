import redis from "../../../redis";
import { Message } from "@/typings";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const messagesRes = await redis.hvals("messages");

  const messages: Message[] = messagesRes
    .map((message) => JSON.parse(message))
    .sort((a, b) => b.created_at - a.created_at);

  return NextResponse.json(messages);
}
