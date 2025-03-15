import StampItem from "./stamp-item";

export default function StampsList({ stamps }) {
  return (
    <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {stamps.map((stamp) => (
        <li key={stamp.id}>
            <StampItem {...stamp}/>
        </li>
      ))}
    </ul>
  );
}
