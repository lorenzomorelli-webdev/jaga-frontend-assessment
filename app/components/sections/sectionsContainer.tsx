"use client";

import React, { useMemo } from "react";
import { useStepContext } from "@/app/context/step";
import AccessoriesSection from "@/app/components/sections/accessoriesSection";
import ColorsSection from "@/app/components/sections/colorsSection";
import ModelsSection from "@/app/components/sections/modelsSection";
import SummarySection from "@/app/components/sections/summarySection";
import { Car, StepType } from "@/utils/utils";

interface SectionContainerProps {
  cars: Car[];
}

// Mapping per selezionare il componente in base allo step corrente
const stepComponents: { [key in StepType]: React.ComponentType<any> } = {
  Models: ModelsSection,
  Colors: ColorsSection,
  Accessories: AccessoriesSection,
  Summary: SummarySection,
} as const;

export default function SectionsContainer(props: SectionContainerProps) {
  const { step } = useStepContext();

  // In base a props.cars preparo le info specifiche per ciascuna sezione.

  // Per il ModelsSection: manteniamo solo l'oggetto model, che contiene anche il modelName.
  const modelsProps = useMemo(() => {
    return {
      models: props.cars.map((car) => car.model),
    };
  }, [props.cars]);

  // Per il ColorsSection: manteniamo il model e tutti i colori disponibili per quella vettura.
  const colorsProps = useMemo(() => {
    return {
      colorsData: props.cars.map((car) => ({
        model: car.model,
        colors: car.colors,
      })),
    };
  }, [props.cars]);

  // Per l'AccessoriesSection: manteniamo il model e tutti gli accessori disponibili per quella vettura.
  const accessoriesProps = useMemo(() => {
    return {
      accessoriesData: props.cars.map((car) => ({
        model: car.model,
        accessories: car.accessory,
      })),
    };
  }, [props.cars]);

  // Mapping da step a props da passare al relativo componente.
  const sectionPropsMapping: { [key in StepType]: object } = {
    Models: modelsProps,
    Colors: colorsProps,
    Accessories: accessoriesProps,
    Summary: {}, // In Summary potresti voler passare tutte le info
  };

  // Componente fallback per step non validi
  const FallbackComponent = () => <div className="text-red-500">Step non valido: {step}</div>;

  // Selezione del componente corrispondente (con fallback in caso di step non valido)
  const StepComponent = stepComponents[step as StepType] ?? FallbackComponent;

  // Recupero le props da passare al componente in base allo step
  const componentProps = sectionPropsMapping[step as StepType] || {};

  return <StepComponent {...componentProps} />;
}
