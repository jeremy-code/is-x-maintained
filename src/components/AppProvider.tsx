"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

export const AppProvider = ({ children }: Readonly<{ children: ReactNode }>) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
