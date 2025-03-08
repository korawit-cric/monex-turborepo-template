import type { ReactNode } from "react";
import React from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "@repo/cric-ui/components/shadcn/ui/button";

type FormButtonProps = {
  children: ReactNode;
  onClick?: () => void; // Optional onClick handler
  type: "button" | "submit" | "reset"; // Allow type to be passed explicitly
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type">; // Omit type from rest to avoid conflicts

export function FormButton({
  children,
  onClick,
  type,
  ...rest
}: FormButtonProps): JSX.Element {
  // Try to get form context, but don't error if it doesn't exist
  const formContext = useFormContext();
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const { isValid = true, isSubmitting = false } = formContext?.formState || {};

  return (
    <Button
      disabled={!isValid || isSubmitting}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {children}
    </Button>
  );
}
