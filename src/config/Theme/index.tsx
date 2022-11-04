import { ThemeProvider, createTheme } from "@mui/material/styles";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Theme = ({ children }: Props) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0169FE",
        contrastText: "white",
      },
      secondary: {
        main: "#545479",
        contrastText: "white",
      },
    },
    typography: {
      fontFamily: ["Roboto Slab"].join(","),
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
