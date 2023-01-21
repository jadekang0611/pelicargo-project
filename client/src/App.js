import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Results from "./pages/Results";
import { CssBaseline, IconButton } from "@mui/material";
import { darkTheme, lightTheme } from "./styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function App() {
  const [theme, setTheme] = React.useState(lightTheme);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline style={{ padding: "10px" }} />
        <Layout theme={theme} setTheme={setTheme}>
          <Results />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export const Layout = ({ children, theme, setTheme }) => {
  const handleColorModeChange = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };
  return (
    <div>
      <section style={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton
          sx={{ ml: 1 }}
          onClick={handleColorModeChange}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </section>

      <section>{children}</section>
    </div>
  );
};

export default App;
