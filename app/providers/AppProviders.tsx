"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

function AppProviders({ children, ...props }: ThemeProviderProps) {
    return (
        <NextThemesProvider {...props}>
            <NextUIProvider>{children}</NextUIProvider>
        </NextThemesProvider>
    );
}

export default AppProviders;
