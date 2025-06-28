const express = require("express");
const app = express();
const sequelize = require('../PLANTAGROTECH/index');
// simple route
app.get('/api/get', async (req, res) => {
 try {
    await sequelize.authenticate();
    res.json({ message: 'Connection has been established successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Unable to connect to the database.', error });
  }
});

const PORT = 9000;
app.listen(PORT, (req,res) => {
  console.log(`Server is running on port ${PORT}.`);
});
