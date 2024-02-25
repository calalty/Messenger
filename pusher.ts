import ClientPusher from "pusher-js";
import Pusher from "pusher";

export const serverPusher = new Pusher({
  appId: "1761546",
  key: "50ee4416fc7afb649617",
  secret: "b241c6c9680a22ee51ec",
  cluster: "eu",
  useTLS: true,
});

export const clientPusher = new ClientPusher("50ee4416fc7afb649617", {
  cluster: "eu",
});
