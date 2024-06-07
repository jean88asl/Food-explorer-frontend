import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/theme";
import { GlobalStyle } from "./styles/global";
import { SignIn } from "./pages/SignIn";

export function App() {
  return (
   <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <SignIn />
   </ThemeProvider>
  )
}

