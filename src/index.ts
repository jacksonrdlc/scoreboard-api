export { };
const express = require("express");
const scoreboardRoute = require("./routes/scoreboard");
const cors = require('cors')

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.use("/api/v1/sports", [scoreboardRoute]);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
