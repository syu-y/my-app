import { createMuiTheme, Theme } from "@material-ui/core";

const theme:Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#8BC34A",
      dark: "#689F38",
      light: "#DCEDC8"
    },
    secondary: {
      main: "#FF5722"
    },
    text: {
      primary: "#212121",
      secondary: "#757575"
    }
  }
});

export default theme;
