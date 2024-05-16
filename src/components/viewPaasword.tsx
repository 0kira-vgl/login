"use client";

import { EyeOff, Eye } from "lucide-react";
import { ComponentProps, useState } from "react";

interface ButtonProps extends ComponentProps<"button"> {}

export function ViewPaasword(props: ButtonProps) {
  const [isShow, setIsShow] = useState(false);

  const handlePassword = () => setIsShow(!isShow);

  return (
    <>
      <button
        onClick={handlePassword}
        type="button"
        className="text-zinc-50 hover:text-zinc-50/80 duration-200 hover:scale-110"
      >
        {isShow && <EyeOff size={20} />}
        {!isShow && <Eye size={20} />}
      </button>
    </>
  );
}
