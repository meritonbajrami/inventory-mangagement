import whiteX from "../../assets/white-x.svg";

export default function Tag({ option, value, onRemove }) {
  const tagColors = {
    sidewalkShed: "apple",
    scaffold: "energy",
    shoring: "studio",
  };
  return (
    <div key={value} className="flex gap-1 items-center rounded">
      <span
        className={`inline-block ml-4 w-2 h-2 rounded-full bg-${
          tagColors[option.value]
        }`}
      ></span>
      <span>{option.label}</span>
      <button type="button" onClick={() => onRemove(option.value)}>
        <img src={whiteX} className="p-1 bg-coral-red rounded-sm" />
      </button>
    </div>
  );
}
