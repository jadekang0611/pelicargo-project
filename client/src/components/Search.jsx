import React from "react";
import { InputBase, Button, InputAdornment } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Results from "../pages/Results";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchStyles } from "../styles";

const SearchContainer = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#f0f0f0",
  marginRight: theme.spacing(2),
  marginLeft: "0 !important",
  width: "100% !important",
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  display: "flex",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(0)})`,
    transition: theme.transitions.create("width"),
    color: "black",
    width: "100% !important",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
    textAlign: "center",
  },
}));

const Search = ({ changeHandler }) => {
  const classes = useSearchStyles();
  return (
    <SearchContainer>
      <StyledInputBase
        placeholder="Search knowledge"
        onChange={changeHandler}
        inputProps={{
          "aria-label": "search",
        }}
      />
      <SearchIcon className={classes.searchIcon} />
    </SearchContainer>
  );
};

export default Search;
