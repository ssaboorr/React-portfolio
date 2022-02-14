import App from "./App";
import { render } from "react-dom";
import { ColorModeScript, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

render(
  <ChakraProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </ChakraProvider>,
  document.querySelector("#root")
);
