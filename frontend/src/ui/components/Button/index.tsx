import type { ButtonProps } from "./types";

const VARIANTS = {
  primary: "bg-primary text-surface hover:text-secondary",
  secondary: "bg-secondary text-primary",
  danger: "bg-error text-surface",
  background: "bg-background text-text-primary hover:bg-muted",
};

const Button = ({
  children,
  variant = "primary",
  className = "",
  type = "button",
  disabled,
  textSize = "text-sm",
  ...props
}: ButtonProps) => (
  <button
    type={type}
    disabled={disabled}
    className={`
      inline-flex cursor-pointer items-center justify-center gap-2
      border border-border px-4 py-2 transition-colors
      ${textSize}
      ${VARIANTS[variant]}
      ${disabled ? "cursor-not-allowed opacity-50" : ""}
      ${className}
    `}
    {...props}
  >
    {children}
  </button>
);

export default Button;
