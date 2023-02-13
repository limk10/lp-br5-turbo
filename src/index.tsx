import { ChakraProvider } from "@chakra-ui/react";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import theme from "./assets/theme";
import { App } from "./pages/App";

import "react-multi-carousel/lib/styles.css";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
