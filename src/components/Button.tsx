import type React from "react";

const Button: React.FC<ButtonProp> = ({ text, color, size, onClick, disabled }) => {
  return (
      <button
          onClick={onClick}
          disabled={disabled}
          className={`px-6 py-2 rounded-lg font-medium transition-all duration-300
        ${size === "small" ? "text-sm px-4 py-1" : ""}
        ${size === "large" ? "text-lg px-8 py-3" : ""}
        ${color === "p" ? "text-sm px-4 py-1" : ""}`}
      >{text}</button>
  );
}

export default Button;