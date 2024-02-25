import ClientPusher from "pusher-js";
import Pusher from "pusher";

export const serverPusher = new Pusher({
  appId: "1761546",
  key: "cafbfcb08adcfd88e63e",
  secret: "2a2aef86953476aa6621",
  cluster: "eu",
  useTLS: true,
});

export const clientPusher = new ClientPusher("cafbfcb08adcfd88e63e", {
  cluster: "eu",
});
