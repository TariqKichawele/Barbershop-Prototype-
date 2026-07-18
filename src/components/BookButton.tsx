import type { ReactNode } from "react";
import { BOOKING_URL } from "@/lib/site";

type BookButtonProps = {
  children?: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
};

export function BookButton({
  children = "Book Your Appointment",
  className = "",
  variant = "primary",
}: BookButtonProps) {
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "btn-ghost",
  };

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
