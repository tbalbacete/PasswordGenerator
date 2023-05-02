import { ShieldCheck, ShieldSlash, ShieldWarning } from "@phosphor-icons/react";
import { ReactNode } from "react";

type PasswordSafety = {
    backgroundColor: string,
    shield: ReactNode,
    passwordSafety: string,
    threshold: number
}

export const passwordSafetyValues: PasswordSafety[] = [
    {
      backgroundColor: "rgb(209, 54, 78)",
      shield: <ShieldSlash size={24} />,
      passwordSafety: "Weak Password",
      threshold: 6,
    },
    {
      backgroundColor: "rgb(190, 78, 58)",
      shield: <ShieldWarning size={24} />,
      passwordSafety: "Average Password",
      threshold: 8,
    },
    {
      backgroundColor: "#1C815A",
      shield: <ShieldCheck size={24} />,
      passwordSafety: "Strong Password",
      threshold: Infinity,
    },
  ];
