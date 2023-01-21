const express = require("express");
const cors = require("cors");

const app = express();
const photoAPIRouter = require("./routes/photos");

app.use(cors());
app.use(express.json());

app.use("/photos", photoAPIRouter);

app.listen(8000, () => console.log("Listening on port 8000"));

module.exports = app;
