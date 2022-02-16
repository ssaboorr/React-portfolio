import App from "./App";
import { render } from "react-dom";
import { ColorModeScript, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { BrowserRouter } from "react-router-dom";

render(
  <ChakraProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>,
  document.querySelector("#root")
);
