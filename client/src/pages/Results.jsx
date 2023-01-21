import React from "react";
import axios from "axios";
import {
  Grid,
  Card,
  CardMedia,
  Typography,
  CardActionArea,
  Pagination,
} from "@mui/material";

import ResultModal from "../components/ResultModal";
import Search from "../components/Search";
import { useResultsPageStyles } from "../styles";
import NoResultScreen from "../components/NoResultScreen";
import LoadingScreen from "../components/LoadingScreen";

const Results = () => {
  const classes = useResultsPageStyles();
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [selectedImg, setSelectedImg] = React.useState({ alt: "", src: "" });
  const [query, setQuery] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(0);
  const [pageCount, setPageCount] = React.useState(0);

  function handleOpenModal(event) {
    setShowModal(true);
    setSelectedImg({ alt: event.target.alt, src: event.target.src });
  }
  function handleCloseModal() {
    setShowModal(false);
  }

  function changeHandler(event) {
    setQuery(event.target.value);
    setCurrentPage(1);
  }

  const fetchData = async (url) => {
    try {
      const { data } = await axios.get(url);
      setData(data.imgList);
      setPageCount(data.pages);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  function handleChange(event, page) {
    setCurrentPage(page);
    fetchData(`http://localhost:8000/photos?query=${query}&page=${page}`);
  }

  React.useEffect(() => {
    const fetchData = async (url) => {
      try {
        const { data } = await axios.get(url);
        setData(data.imgList);
        setPageCount(data.pages);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    fetchData(
      `http://localhost:8000/photos?query=${query}&page=${currentPage}`
    );
  }, [query, currentPage]);
  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div>
          <Search changeHandler={changeHandler} />
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {data.length < 1 ? (
              <NoResultScreen />
            ) : (
              data.map((item) => (
                <Grid item xs={2} sm={4} md={4} key={item.id}>
                  <ResultCard item={item} handleOpenModal={handleOpenModal} />
                  <ResultModal
                    selectedImg={selectedImg}
                    handleCloseModal={handleCloseModal}
                    showModal={showModal}
                  />
                </Grid>
              ))
            )}
          </Grid>
          <div className={classes.paginationWrapper}>
            <Pagination
              count={pageCount}
              page={currentPage}
              onChange={handleChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const ResultCard = ({ item, handleOpenModal }) => {
  return (
    <>
      <Card xs={{ maxWidth: 345 }} id={item.id} onClick={handleOpenModal}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={item.src}
            alt={item.alt}
          />
        </CardActionArea>
      </Card>
      <div style={{ paddingTop: "10px" }}>
        <Typography variant="body2" color="text.secondary">
          {item.photographer}
        </Typography>
        <Typography variant="subtitle2" color="text.primary">
          {item.alt}
        </Typography>
      </div>
    </>
  );
};

export default Results;
