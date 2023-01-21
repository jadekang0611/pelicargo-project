import React from "react";
import { useNoResultScreenStyles } from "../styles";
import noResultImg from "../assets/no-result.png";
import { Typography } from "@mui/material";

const NoResultScreen = () => {
  const classes = useNoResultScreenStyles();
  return (
    <div className={classes.noResultContainer}>
      <img
        className={classes.imageWrapper}
        src={noResultImg}
        alt="photographer"
      />
      <Typography textAlign="center" variant="h4" component="h2">
        No Results found
      </Typography>
      <Typography
        textAlign="center"
        variant="subtitle2"
        className={classes.message}
      >
        We couldn't find what you searched for. <br /> Try searching again.
      </Typography>
    </div>
  );
};

export default NoResultScreen;
