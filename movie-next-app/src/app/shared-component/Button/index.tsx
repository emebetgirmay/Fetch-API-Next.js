"use client";
interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: "filled" | "outlined";
  classname?: string;
  children?: React.ReactNode;
}

const Button = ({
  text,
  onClick,
  variant = "filled",
  classname = "",
  children,
}: ButtonProps) => {
  const baseStyle =
    "px-4 py-3 rounded-lg cursor-pointer font-semibold transition duration-300 ease-in-out";
  const variantStyle =
    variant === "filled"
      ? "bg-pink-300 text-gray-900 hover:bg-pink-400"
      : "border border-pink-300 text-pink-300 hover:bg-pink-400 hover:text-gray-900";
  const combinedStyle = `${baseStyle} ${variantStyle} ${classname}`;

  return (
    <button onClick={onClick} className={combinedStyle}>
      {children ?? text}
    </button>
  );
};

export default Button;