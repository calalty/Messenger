"use client";

import React, { useState } from "react";
import messengerLogo from "../images/messenger.png";
import profile from "../images/puppy.png";
import Image from "next/image";
import { Button } from "./Button";

export const Header = () => {
  const session = false;

  return (
    <header className="flex flex-row p-5 border-b-1 border-gray-200 shadow-md justify-between items-center text-[#1e0048]">
      <div className="flex flex-row items-center gap-4">
        <Image
          src={session ? profile : messengerLogo}
          alt=""
          width={300}
          height={50}
          className={`w-20 object-contain ${
            session && "rounded-[50%] bg-[#59fcC8]"
          }`}
        />

        {session && (
          <div className="flex flex-col">
            <p className="font-light">Logged in as:</p>
            <p className="font-bold">Cal Alton</p>
          </div>
        )}
      </div>

      <Button text={session ? "Sign out" : "Sign in"} />
    </header>
  );
};
