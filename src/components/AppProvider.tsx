"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

type AppProviderProps = {
  nonce?: string;
} & Readonly<{ children: ReactNode }>;

export const AppProvider = ({ children, nonce }: AppProviderProps) => {
  return <ThemeProvider nonce={nonce}>{children}</ThemeProvider>;
};
