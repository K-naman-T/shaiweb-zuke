"use client";
import { cn } from "../../lib/utils";
import React from "react";

export const GoogleGeminiEffect = ({
  title,
  description,
  className,
}: {
  title?: string;
  description?: string;
  className?: string;
}) => {
  return (
    <div className={cn("relative", className)}>
      <p className="text-4xl md:text-8xl font-bold pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300">
        {title}
      </p>
      <p className="text-lg md:text-2xl font-normal text-center text-neutral-400 mt-4 max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
};
