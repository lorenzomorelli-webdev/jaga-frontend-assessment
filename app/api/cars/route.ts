const cars = [
  {
    model: { name: "BMQ i3", cost: 42400 },
    colors: [
      { name: "White", cost: 0 },
      { name: "Mineral Grey", cost: 550 },
      { name: "Orange Metallic", cost: 550 },
    ],
    accessory: [
      { name: "BMW Charging Station", cost: 1080 },
      { name: "BMW Maintenance Program Upgrade", cost: 1895 },
      { name: "1 Year BMW Maintenance Program Upgrade", cost: 975 },
    ],
  },
  {
    model: { name: "BMQ i8", cost: 140700 },
    colors: [
      { name: "Grey Metallic", cost: 0 },
      { name: "White Pearl Metallic", cost: 1800 },
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
  return Response.json({ cars });
}
