"use client";

import { StepType } from "@/utils/utils";
import { createContext, use, useState } from "react";

type StepContextType = {
  step: StepType;
  setStepLogger: (step: StepType) => void;
};

const StepContext = createContext<StepContextType | undefined>(undefined);

export function StepProvider({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState<StepType>("Models");

  const setStepLogger = (step: StepType) => {
    console.log("setStep called with value:", step);
    setStep(step);
  };

  return (
    <StepContext.Provider
      value={{
        step,
        setStepLogger,
      }}>
      {children}
    </StepContext.Provider>
  );
}

export function useStepContext() {
  const context = use(StepContext);
  if (context === undefined) {
    throw new Error("useStateContext must be used within a StateProvider");
  }
  return context;
}
