import { motion } from "framer-motion";
// src/components/ui/Button.jsx
import React from "react";

import colors from "../../constants/colors";


const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2  text-base",
  lg: "px-6 py-3 text-lg",
};

// 🟦 Variant Names
const variants = {
  primary: "primary",
  secondary: "secondary",
  accent: "accent",
  danger: "danger",
  ghost: "ghost",
  custom: "custom",
};

// 🟦 Variant Styles (pure CSS, no tailwind)
const variantStyles = {
  primary: {
    backgroundColor: colors.accent,
    color: "#000",
  },
  secondary: {
    backgroundColor: colors.cardBg,
    color: colors.textSecondary,
    border: `1px solid ${colors.cardBorder}`,
  },
  accent: {
    backgroundColor: colors.accent,
    color: "#000",
  },
  danger: {
    backgroundColor: colors.danger,
    color: "white",
  },
  ghost: {
    backgroundColor: "transparent",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "white",
  },
  // custom handled separately
};

export default function Button({
  children,
  onClick,
  size = "md",
  variant = "primary",
  icon: Icon,
  className = "",
  fullWidth = false,
  motionEffect = true,
  bg,       // for custom
  text,     // for custom
  style = {},
  ...props
}) {
  const Component = motionEffect ? motion.button : "button";

  // 🟡 Custom variant logic
  const computedStyles =
    variant === "custom"
      ? { backgroundColor: bg, color: text }
      : variantStyles[variant] || {};

  return (
    <Component
      whileHover={motionEffect ? { scale: 1.05 } : {}}
      whileTap={motionEffect ? { scale: 0.95 } : {}}
      onClick={onClick}
      style={{
        ...computedStyles,
        ...style, // ← user style overrides ONLY layout stuff
      }}
      className={`
        inline-flex items-center justify-center gap-2
        font-semibold rounded-full transition-all duration-200
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {Icon && <Icon size={18} />}
      {children}
    </Component>
  );
}
