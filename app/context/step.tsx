"use client";

import { StepType } from "@/utils/utils";
import { createContext, use, useState } from "react";

type StepContextType = {
  step: StepType;
  setStep: (step: StepType) => void;
};

const StepContext = createContext<StepContextType | undefined>(undefined);

export function StepProvider({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState<StepType>("Models");

  return (
    <StepContext
      value={{
        step,
        setStep,
      }}>
      {children}
    </StepContext>
  );
}

export function useStepContext() {
  const context = use(StepContext);
  if (context === undefined) {
    throw new Error("useStateContext must be used within a StateProvider");
  }
  return context;
}
