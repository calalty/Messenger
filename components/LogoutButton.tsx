"use client";

import { signOut } from "next-auth/react";
import { Button } from "./Button";

export const LoginLogoutButton = () => {
  return <Button onClick={() => signOut()} text={"Sign out"} />;
};
