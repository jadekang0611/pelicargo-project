const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  // Get page number and search query from query string
  const page = req.query.page || 1;
  const query = req.query.query || "";
  let imgList = [];
  let unsplashData = [];
  let pexelsData = [];
  let total_results = {
    pexels: 0,
    unsplash: 0,
  };
  let pages = 0;

  function buildData(source, data) {
    if (source === "pexels") {
      data.forEach((el) => {
        imgList.push({
          src: el.src.medium,
          alt: el.alt,
          photographer: el.photographer,
          id: el.id,
        });
      });
    } else if (source === "unsplash") {
      data.forEach((el) => {
        imgList.push({
          src: el.urls.regular,
          alt: el.alt_description,
          photographer: el.user.name,
          id: el.id,
        });
      });
    }
  }

  try {
    try {
      // Fetch data from Unsplash API
      const unsplashResponse = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&per_page=5&page=${page}`,
        {
          headers: {
            Authorization:
              "Client-ID HbOwmRSP26zIvZ3gAiTMRwKn2YmPX2JARaWH3DXJy6E",
          },
        }
      );

      unsplashData = unsplashResponse.data.results || [];
      total_results.unsplash = unsplashResponse.data.total;
      //buildData("unsplash", unsplashData);
    } catch (error) {
      console.log("There was an issue with the Unsplash API");
      console.log(error);
    }

    try {
      // Fetch data from Pexels API
      const pexelsResponse = await axios.get(
        `https://api.pexels.com/v1/search?query=${query}&per_page=4&page=${page}`,
        {
          headers: {
            Authorization:
              "GONMi59KLb2gHZVOrq3nIrQQ1egP1ayiVXe8KCWnitVr7S41l354Y7k4",
          },
        }
      );

      pexelsData = pexelsResponse.data.photos || [];
      total_results.pexels = pexelsResponse.data.total_results;
      //buildData("pexels", pexelsData);
    } catch (error) {
      console.log("There was an issue with the Pexels API");
      //console.log(error);
    }

    // There is no more data
    // if (pexelsData.length === 0 && unsplashData.length === 0) {
    //   res.status(404).json({ error: "No photos found" });
    //   return;
    // }

    if (pexelsData.length < 4 && unsplashData.length !== 0) {
      let remaining = 4 - pexelsData.length;
      unsplashResponse = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&per_page=${
          5 + remaining
        }&page=${page}`,
        {
          headers: {
            Authorization:
              "Client-ID HbOwmRSP26zIvZ3gAiTMRwKn2YmPX2JARaWH3DXJy6E",
          },
        }
      );
      unsplashData = unsplashResponse.data.results || [];
      total_results.unsplash = unsplashResponse.data.total;
    }

    if (unsplashData.length < 5 && pexelsData.length !== 0) {
      let remaining = 5 - unsplashData.length;
      pexelsResponse = await axios.get(
        `https://api.pexels.com/v1/search?query=${query}&per_page=${
          4 + remaining
        }&page=${page}`,
        {
          headers: {
            Authorization:
              "GONMi59KLb2gHZVOrq3nIrQQ1egP1ayiVXe8KCWnitVr7S41l354Y7k4",
          },
        }
      );
      pexelsData = pexelsResponse.data.photos || [];
      total_results.pexels = pexelsResponse.data.total_results;
    }

    buildData("pexels", pexelsData);
    buildData("unsplash", unsplashData);

    let pexelsPages = Math.ceil(total_results.pexels / 9);
    let unsplashPages = Math.ceil(total_results.unsplash / 9);

    // setting the smaller page for now due to issues with fetching when the page
    // number doesn't exist
    if (pexelsPages < unsplashPages) {
      pages = unsplashPages;
    } else {
      pages = pexelsPages;
    }
    res.json({ imgList: imgList, pages: pages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
});

module.exports = router;
