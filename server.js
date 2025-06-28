const express = require("express");
const app = express();

// simple route
app.get('/api/get', (req, res) => {
  res.send({ message: "Welcome to Plant Agro tech application." });
});

const PORT = 9000;
app.listen(PORT, (req,res) => {
  console.log(`Server is running on port ${PORT}.`);
});
