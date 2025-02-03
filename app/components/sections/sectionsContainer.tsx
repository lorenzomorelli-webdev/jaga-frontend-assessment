"use client";

import { useChoiceContext } from "@/app/context/choice";
import { useStepContext } from "@/app/context/step";
import AccessoriesSection from "@/app/components/sections/accessoriesSection";
import React from "react";
import ColorsSection from "@/app/components/sections/colorsSection";
import ModelsSection from "@/app/components/sections/modelsSection";
import SummarySection from "@/app/components/sections/summarySection";

interface SectionContainerProps {
  // Define your props here
}

export default function SectionsContainer(props: SectionContainerProps) {
  const { step } = useStepContext();
  const { choice } = useChoiceContext();

  switch (step) {
    case "Models":
      return <ModelsSection />;
    case "Colors":
      return <ColorsSection />;
    case "Accessories":
      return <AccessoriesSection />;
    case "Summary":
      return <SummarySection />;
    default:
      return <div>Unknown step: {step}</div>;
  }
}
