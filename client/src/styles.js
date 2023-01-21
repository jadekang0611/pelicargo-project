import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#121212",
    },
    text: {
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.7)",
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

export const lightTheme = createTheme({
  palette: {
    mode: "light",
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

export const useResultModalStyles = makeStyles((theme) => ({
  img: {
    width: "100%",
  },
  close: {
    padding: 12,
    top: 0,
    right: 0,
    position: "fixed",
    zIndex: 1201,
    cursor: "pointer",
  },
  btnWrapper: {
    color: "#fff",
    top: 0,
    right: 0,
    position: "fixed",
    zIndex: 1201,
    cursor: "pointer",
    "&:hover": {
      cursor: "pointer",
      color: "#555555",
    },
  },
}));

export const useSearchStyles = makeStyles((theme) => ({
  searchIcon: {
    position: "absolute",
    top: 8,
    left: 10,
    color: "#000",
    padding: "4px",
    borderRadius: "2px",
  },
}));

export const useResultsPageStyles = makeStyles((theme) => ({
  paginationWrapper: {
    paddingTop: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
  },
}));

export const useNoResultScreenStyles = makeStyles((theme) => ({
  noResultContainer: {
    margin: "auto",
    display: "flex",
    flexDirection: "column",
  },
  imageWrapper: {
    width: "100%",
    maxWidth: "400px",
    margin: "auto",
  },
  message: {
    paddingTop: theme.spacing(2),
  },
}));
