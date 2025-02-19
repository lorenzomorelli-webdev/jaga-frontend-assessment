import { Car } from "@/utils/utils";

//capire se ha senso definire il tipo
const cars: Car[] = [
  {
    model: { name: "BMQ i3", cost: 42400, imgUrl: "/product01_col01.jpg" },
    colors: [
      { name: "White", cost: 0, imgUrl: "/product01_col01.jpg" },
      { name: "Mineral Grey", cost: 550, imgUrl: "/product01_col02.jpg" },
      { name: "Orange Metallic", cost: 550, imgUrl: "/product01_col03.jpg" },
    ],
    accessory: [
      { name: "BMW Charging Station", cost: 1080 },
      { name: "BMW Maintenance Program Upgrade", cost: 1895 },
      { name: "1 Year BMW Maintenance Program Upgrade", cost: 975 },
    ],
  },
  {
    model: { name: "BMQ i8", cost: 140700, imgUrl: "/product02_col01.jpg" },
    colors: [
      { name: "Grey Metallic", cost: 0, imgUrl: "/product02_col01.jpg" },
      { name: "White Pearl Metallic", cost: 1800, imgUrl: "/product02_col02.jpg" },
    ],
    accessory: [
      { name: "BMW Laserlight", cost: 6300 },
      { name: "BMW Charging Station", cost: 1080 },
      { name: "BMW Maintenance Program Upgrade", cost: 1895 },
      { name: "1 Year BMW Maintenance Program Upgrade", cost: 975 },
    ],
  },
];

export async function GET() {
  return Response.json(cars);
}
