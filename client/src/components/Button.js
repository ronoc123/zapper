import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#5B8A8C",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
});

export default function ContainedButtons({ name }) {
  return (
    <ThemeProvider theme={theme}>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary">
          {name}
        </Button>
      </Stack>
    </ThemeProvider>
  );
}
