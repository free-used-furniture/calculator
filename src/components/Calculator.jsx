import  { useState } from "react";



export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (["+", "-", "*", "/"].includes(value)) {
      setInput((prevInput) =>
        ["+", "-", "*", "/"].includes(prevInput.slice(-1))
          ? prevInput.slice(0, -1) + value  
          : prevInput + value               
      );
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };
  

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      setInput(new Function("return " + input)().toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((char) => (
          <button
            key={char}
            className="button"
            onClick={() => (char === "=" ? calculateResult() : handleClick(char))}
          >
            {char}
          </button>
        ))}
        <button className="button clear" onClick={clearInput}>
          C
        </button>
      </div>
    </div>
  );
}
