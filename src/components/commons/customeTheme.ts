import { createMuiTheme } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

export const customTheme = createMuiTheme({
  mixins: {
      toolbar: {
          minHeight: 42
      }
  },
  palette: {
      primary: {
          main: blue[300]
      }
  },
  props: {
    MuiTextField: {
        variant: "outlined"
    }
  },
  typography: {
    fontSize: 14,
    button: {
        textTransform: "none"
    }
  }
});
