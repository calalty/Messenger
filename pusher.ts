import ClientPusher from "pusher-js";
import Pusher from "pusher";

export const serverPusher = new Pusher({
  appId: `${process.env.PUSHER_APP_ID!}`,
  key: `${process.env.PUSHER_KEY!}`,
  secret: `${process.env.PUSHER_SECRET!}`,
  cluster: "eu",
  useTLS: true,
});

export const clientPusher = new ClientPusher(`${process.env.PUSHER_KEY!}`, {
  cluster: "eu",
});
