const express = require("express");
const app = express();
// parse requests of content-type - application/json
app.use(express.json());


// simple route
app.get("/welcome", (req, res) => {
  res.json({ message: "Welcome to Plant Agro tech application." });
});
// const router = require('./app/routes/router');
// app.use('/', router);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
