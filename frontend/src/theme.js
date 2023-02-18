import { createTheme } from "@material-ui/core/styles";

const myTheme = createTheme({
  palette: {
    primary: "#26a69a",
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#f3d3bd",
      },
    },
  },
});

export default createTheme(myTheme);
