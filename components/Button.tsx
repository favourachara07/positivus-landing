import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "icon" | "cta";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    "font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-black text-white hover:bg-gray-800 focus:ring-gray-500",
    secondary:
      "bg-green-300 hover:bg-green-400 text-black focus:ring-green-400",
    outline:
      "bg-white border border-black text-black hover:bg-black hover:text-white focus:ring-gray-500",
    ghost: "text-green-300 hover:text-green-400 focus:ring-green-400",
    icon: "bg-green-300 hover:bg-green-400 text-black rounded-full focus:ring-green-400",
    cta: "bg-black text-white hover:bg-gray-800 focus:ring-gray-500",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-2 rounded-lg",
    lg: "px-8 py-4 text-lg rounded-lg",
  };

  const iconSizes = {
    sm: "p-2",
    md: "p-3",
    lg: "p-4",
  };

  const sizeClasses = variant === "icon" ? iconSizes[size] : sizes[size];

  const buttonClasses =
    `${baseClasses} ${variants[variant]} ${sizeClasses} ${className}`.trim();

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
