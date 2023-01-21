import { makeStyles } from "@mui/styles";

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
    background: "#fff",
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
