import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Props = {
  text: string;
  additionalClassName?: string;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
};

export const Button = ({
  text,
  type,
  additionalClassName,
  disabled,
}: Props) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`bg-white h-fit px-4 py-2 rounded-3xl border-[#1e0048] border-[1px] font-bold shadow-[#1e0048_4px_4px_0_0] disabled:text-[#1e004850] ${additionalClassName}`}
    >
      {text}
    </button>
  );
};
