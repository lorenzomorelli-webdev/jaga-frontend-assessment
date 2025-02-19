"use client";

import { createContext, useContext, useState } from "react";

type Car = {
  id: string;
  name: string;
  price: number;
  colors: {
    id: string;
    name: string;
    hex: string;
    price: number;
  }[];
  accessories: {
    id: string;
    name: string;
    price: number;
  }[];
};

type Choice = {
  selectedCar: Car | null;
  selectedColor: Car["colors"][0] | null;
  selectedAccessories: Car["accessories"][0][];
  availableCars: Car[];
  loading: boolean;
  error: string | null;
};

type ChoiceContextType = {
  choice: Choice;
  selectCar: (car: Car) => void;
  selectColor: (color: Car["colors"][0]) => void;
  toggleAccessory: (accessory: Car["accessories"][0]) => void;
  fetchCars: () => Promise<void>;
};

const initialState: Choice = {
  selectedCar: null,
  selectedColor: null,
  selectedAccessories: [],
  availableCars: [],
  loading: false,
  error: null,
};

const ChoiceContext = createContext<ChoiceContextType | undefined>(undefined);

export function ChoiceProvider({ children }: { children: React.ReactNode }) {
  const [choice, setChoice] = useState<Choice>(initialState);

  const selectCar = (car: Car) => {
    setChoice((prev) => ({
      ...prev,
      selectedCar: car,
      selectedColor: null,
      selectedAccessories: [],
    }));
  };

  const selectColor = (color: Car["colors"][0]) => {
    setChoice((prev) => ({
      ...prev,
      selectedColor: color,
    }));
  };

  const toggleAccessory = (accessory: Car["accessories"][0]) => {
    setChoice((prev) => {
      const exists = prev.selectedAccessories.find((a) => a.id === accessory.id);
      return {
        ...prev,
        selectedAccessories: exists
          ? prev.selectedAccessories.filter((a) => a.id !== accessory.id)
          : [...prev.selectedAccessories, accessory],
      };
    });
  };

  const fetchCars = async () => {
    setChoice((prev) => ({ ...prev, loading: true, error: null }));
    try {
      const response = await fetch("/api/cars");
      if (!response.ok) throw new Error("Failed to fetch cars");
      const { cars } = await response.json();
      setChoice((prev) => ({
        ...prev,
        availableCars: cars,
        loading: false,
      }));
    } catch (error) {
      setChoice((prev) => ({
        ...prev,
        error: error instanceof Error ? error.message : "An error occurred",
        loading: false,
      }));
    }
  };

  return (
    <ChoiceContext
      value={{
        choice,
        selectCar,
        selectColor,
        toggleAccessory,
        fetchCars,
      }}>
      {children}
    </ChoiceContext>
  );
}

export function useChoiceContext() {
  const context = useContext(ChoiceContext);
  if (context === undefined) {
    throw new Error("useChoiceContext must be used within a ChoiceProvider");
  }
  return context;
}
