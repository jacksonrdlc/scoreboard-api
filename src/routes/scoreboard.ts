const { fetchData } = require("../utils/fetchData");
const express = require("express");

const router = express.Router();

router.get("/mlb/events", async (req, res) => {

  const response = await fetchData('https://proxy.espn.com/mlb/scoreboard', 'mlb');

  if (!response) {
    return res.sendStatus(404);
  }
  if (response.length < 1) {
    return res.sendStatus(404);
  }

  res.json({
    date: new Date(),
    scores: response || []
  });
});

router.get("/nba/events", async (req, res) => {
  const response = await fetchData('https://proxy.espn.com/nba/scoreboard', 'nba');

  if (!response) {
    return res.sendStatus(404);
  }
  if (response.length < 1) {
    return res.sendStatus(404);
  }

  res.json({
    date: new Date(),
    scores: response || []
  });
});

module.exports = router;
