import { getProviders } from "next-auth/react";
import Image from "next/image";
import chitChatLogo from "../../../images/chitchat.png";

import { SignIn } from "@/components/SignIn";

const SignInPage = async () => {
  const providers = await getProviders();

  return (
    <div className="flex justify-center items-center flex-col mt-8 gap-6">
      <Image
        src={chitChatLogo}
        alt=""
        width={600}
        height={100}
        className={"w-40 object-contain"}
      />

      <SignIn providers={providers} />
    </div>
  );
};

export default SignInPage;
