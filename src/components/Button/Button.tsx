"use client";

import styles from "./Button.module.scss";
import { cn } from "@/lib/utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "destructive" | "outline";
  size?: "sm" | "md" | "lg";
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: Props) {
  return (
    <button
      className={cn(
        styles.button,
        styles[variant],
        size !== "md" && styles[size],
        className
      )}
      {...props}
    />
  );
}