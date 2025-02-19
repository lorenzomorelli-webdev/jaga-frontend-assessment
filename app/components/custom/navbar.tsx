"use client";

import { useStepContext } from "@/app/context/step";
import { cn } from "@/utils/classNameMerge";
import { stepLabels } from "@/utils/utils";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const { step, setStep } = useStepContext();
  const activeStyle = "text-amber-300 border-b-2 border-amber-300";
  const defaultStyle = "p-1";

  return (
    <nav
      id="navbar"
      className={cn("flex gap-2 text-gray-500 text-xl", className)}>
      {stepLabels.map((stepLabel) => (
        <a
          key={stepLabel}
          href="#"
          onClick={() => setStep(stepLabel)}
          className={step == stepLabel ? cn(defaultStyle, activeStyle) : cn(defaultStyle)}>
          {stepLabel}
        </a>
      ))}
    </nav>
  );
}
