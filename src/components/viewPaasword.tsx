"use client";

import { EyeOff, Eye } from "lucide-react";
import { ComponentProps, useState } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentProps<"button"> {}

export function ViewPaasword(props: ButtonProps) {
  const [isShow, setIsShow] = useState(false);

  const handlePassword = () => setIsShow(!isShow);

  return (
    <>
      <button
        onClick={handlePassword}
        type="button"
        {...props}
        className={twMerge(
          "text-zinc-50 hover:text-zinc-50/80 duration-200 hover:scale-110",
          props.className
        )}
      >
        {isShow && <EyeOff size={20} />}
        {!isShow && <Eye size={20} />}
      </button>
    </>
  );
}
