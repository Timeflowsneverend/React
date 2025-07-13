import clsx from "clsx";

const Button = ({ text, bgColor, textColor }) => {
  const className = clsx("px-3 py-2 rounded-2xl", textColor, bgColor);
  return (
    <button
      //   style={{ backgroundColor: bgColor, color: textColor }}
      className={className}
    >
      {text}
    </button>
  );
};

export default Button;
