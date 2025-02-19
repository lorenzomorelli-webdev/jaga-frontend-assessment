export const stepLabels: string[] = ["Models", "Colors", "Accessories", "Summary"] as const;
export type StepType = (typeof stepLabels)[number];

//le url delle immagini! model - color! ragionare sulle immagini di default!
export interface Car {
  model: {
    name: string;
    cost: number;
    imgUrl: string;
  };
  colors: {
    name: string;
    cost: number;
    imgUrl: string;
  }[];
  accessory: {
    name: string;
    cost: number;
  }[];
}

export const baseUrl = `${process.env.LOCALHOST}:${process.env.PORT}`;
