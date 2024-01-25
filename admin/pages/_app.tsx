"use client";
import { useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
import { Layout } from "../components/layout/layout";
import useAuth from "../components/hooks/useAuth";
import { AuthProvider } from "../components/authContext/authContext";

function MyApp({ Component, pageProps }: AppProps) {
  const { isAuthenticated, checkAuth } = useAuth();

  useEffect(() => {
    // Verifica la autenticación en cada cambio de ruta
    checkAuth();
  }, [checkAuth]);
  return (
    <NextThemesProvider defaultTheme="system" attribute="class">
      <NextUIProvider>
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
