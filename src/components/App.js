import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import YoutubeApp from "./YoutubeApp";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <YoutubeApp />
    </ThemeProvider>
  );
}
