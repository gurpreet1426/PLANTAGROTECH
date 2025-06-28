const express = require("express");
const app = express();
// parse requests of content-type - application/json
app.use(express.json());


// simple route
app.get("/welcome", (req, res) => {
  res.json({ message: "Welcome to Plant Agro tech application." });
});

const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
