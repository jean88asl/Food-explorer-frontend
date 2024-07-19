import { ThemeProvider } from "styled-components";

import { Routes } from "./routes/index"

import { AuthProvider } from "./hooks/auth"

import { defaultTheme } from "./styles/themes/theme";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

