interface ModelSectionProps {
  models: {
    name: string;
    cost: number;
    imgUrl: string;
  }[];
}

export default function ModelsSection(props: ModelSectionProps) {
  return (
    <div className="flex gap-3">
      {props.models.map((model) => (
        <div
          key={model.name}
          className="flex flex-col gap-2 items-center shadow p-6 hover:scale-110 transition-all">
          <h3 key={model.name}>{model.name}</h3>
          <img src={model.imgUrl} />
          <p>from ${model.cost}</p>
        </div>
      ))}
    </div>
  );
}
