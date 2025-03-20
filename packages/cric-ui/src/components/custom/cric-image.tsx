// components/ui/avatar.tsx
import * as React from "react";
import NextImage from "next/image";
import { cn } from "#lib/utils.ts";

type ImageProps = {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const sizeMap = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-16 w-16",
  xl: "h-24 w-24",
};

export function CricImage({
  src,
  alt,
  size = "lg",
  className,
  ...props
}: ImageProps) {
  return (
    <div
      className={cn("relative overflow-hidden", sizeMap[size], className)}
      {...props}
    >
      <NextImage alt={alt} className="object-cover" fill src={src} />
    </div>
  );
}
