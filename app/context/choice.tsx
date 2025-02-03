"use client";

/**
 * TUTTO DA RIVEDERE!! questo è solo lo scheletro generato dall'IA
 *
 */
import { createContext, useContext, useState } from "react";

type Choice = {
  cars: any[];
  loading: boolean;
  error: string | null;
};

type ChoiceContextType = {
  choice: Choice;
  setChoice: (choice: Choice) => void;
};

const initialState: Choice = {
  cars: [],
  loading: false,
  error: null,
};

const ChoiceContext = createContext<ChoiceContextType | undefined>(undefined);

export function ChoiceProvider({ children }: { children: React.ReactNode }) {
  const [choice, setChoice] = useState<Choice>(initialState);

  return (
    <ChoiceContext.Provider
      value={{
        choice,
        setChoice,
      }}>
      {children}
    </ChoiceContext.Provider>
  );
}

export function useChoiceContext() {
  const context = useContext(ChoiceContext);
  if (context === undefined) {
    throw new Error("useChoiceContext must be used within a ChoiceProvider");
  }
  return context;
}
