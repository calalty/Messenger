import React from "react";
import chitChatLogo from "../images/chitchat.png";

import Image from "next/image";

import { getServerSession } from "next-auth";

import { LoginLogoutButton } from "./LogoutButton";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

export const Header = async () => {
  const session = await getServerSession(authOptions);

  return (
    <header className="flex flex-row p-5 border-b-1 border-gray-200 shadow-md justify-between items-center">
      <div className="flex flex-row items-center gap-4">
        <Image
          src={
            session
              ? `https://robohash.org/${session.user?.name}`
              : chitChatLogo
          }
          alt=""
          width={300}
          height={50}
          className={`w-16 object-contain ${
            session &&
            "rounded-full bg-gray-100 border-[#84848450] border-[1px]"
          }`}
        />

        {session ? (
          <div className="flex flex-col">
            <p className="font-light">Logged in as:</p>
            <p className="font-bold">{session.user?.name}</p>
          </div>
        ) : (
          <p className="font-bold">Welcome to Chit-Chat!</p>
        )}
      </div>

      {session && <LoginLogoutButton />}
    </header>
  );
};
