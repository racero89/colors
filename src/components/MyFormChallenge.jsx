import { useRef, useState } from "react";
import BoxColor from "./BoxColor";

const colors = [
  "red",
  "green",
  "pink",
  "yellow",
  "purple",
  "white",
  "blue",
  "aqua",
  "olive",
];

function MyFormChallenge() {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  const handleChange = () => {
    setInputValue(inputRef.current.value);
  };

  return (
    <div>
      <h1>🎨 Input Box Colors</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="Escribe un color..."
        onChange={handleChange}
      />

      <div className="grid">
        {colors.map((color) => (
          <BoxColor
            key={color}
            color={color}
            inputValue={inputValue}
          />
        ))}
      </div>
    </div>
  );
}

export default MyFormChallenge;
