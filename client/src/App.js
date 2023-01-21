import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Results from "./pages/Results";
import { Switch, CssBaseline } from "@mui/material";

function App() {
  // const theme = useTheme();
  const [toggleDark, setToggleDark] = useState(false);

  const theme = createTheme({
    palette: {
      mode: toggleDark ? "dark" : "light",
      grey: {
        800: "#000000", // overrides failed
        900: "#121212", // overrides success
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            margin: "0",
            boxSizing: "border-box",
            padding: "40px",
          },
        },
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline style={{ padding: "10px" }} />
        <Layout toggleDark={toggleDark} setToggleDark={setToggleDark}>
          {/* <Search /> */}
          <Results />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export const Layout = ({ children, toggleDark, setToggleDark }) => {
  const handleColorModeChange = () => {
    setToggleDark(!toggleDark);
  };
  return (
    <div>
      <section style={{ display: "flex", justifyContent: "flex-end" }}>
        <Switch
          checked={toggleDark}
          onChange={handleColorModeChange}
          name="toggleDark"
          color="primary"
        />
      </section>

      <section>{children}</section>
    </div>
  );
};

export default App;
