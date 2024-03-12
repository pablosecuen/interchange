"use client";
import { useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
import { Layout } from "../components/layout/layout";
import useAuth from "../components/hooks/useAuth";
import { AuthProvider } from "../components/authContext/authContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppProvider } from "../Provider/useContextProvider";

function MyApp({ Component, pageProps }: AppProps) {
  const { isAuthenticated, checkAuth } = useAuth();
  const queryClient = new QueryClient();
  useEffect(() => {
    // Verifica la autenticación en cada cambio de ruta
    checkAuth();
  }, [checkAuth]);
  return (
    <NextThemesProvider defaultTheme="system" attribute="class">
      <NextUIProvider>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <AppProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </AppProvider>
          </QueryClientProvider>
        </AuthProvider>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
