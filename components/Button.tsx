"use client";

type Props = {
  text: string;
  onClick?: () => void;
  additionalClassName?: string;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
};

export const Button = ({
  text,
  type,
  additionalClassName,
  disabled,
  onClick,
}: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`bg-[#f8f8ed] h-fit px-4 py-2 rounded-3xl border-[#848484] border-[1px] font-bold shadow-[#848484_4px_4px_0_0] disabled:text-[#84848450] text-[#848484] ${additionalClassName}`}
    >
      {text}
    </button>
  );
};
