"use client";

import { getProviders, signIn } from "next-auth/react";
import { Button } from "./Button";

type Props = {
  providers: Awaited<ReturnType<typeof getProviders>>;
};

export const SignIn = ({ providers }: Props) => {
  return (
    <>
      {providers &&
        Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <Button
              onClick={() => signIn(provider.id)}
              text={`Sign in with ${provider.name}`}
            />
          </div>
        ))}
    </>
  );
};
