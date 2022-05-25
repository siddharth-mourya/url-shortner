const router = require("express").Router();
const isUrl = require("is-url");
const shortid = require("shortid");
const Url = require("../models/Url");
const BASE_URL = require("../constants/index");

router.get("/:code", async (req, res) => {
  try {
    const url = await Url.findOne({
      urlShortCode: req.params.code,
    });
    if (url) {
      return res.redirect(url.actualUrl);
    } else {
      return res.status(404).send({ error: "No Url Found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Server Error" });
  }
});

router.post("/shorten", async (req, res) => {
  let { actualUrl } = req.body;
  const urlShortCode = shortid.generate();
  if (!(actualUrl.includes("http") || actualUrl.includes("https"))) {
    actualUrl = "https://" + actualUrl;
  }
  if (isUrl(actualUrl)) {
    try {
      let url = await Url.findOne({
        actualUrl,
      });
      if (url) {
        res.send(url);
      } else {
        const shortenedUrl = BASE_URL + "/" + urlShortCode;
        url = new Url({
          actualUrl,
          shortenedUrl,
          urlShortCode,
        });
        await url.save();
        res.send(url);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: "Server Error" });
    }
  } else {
    res.status(401).send({ error: "Invalid Url" });
  }
});

module.exports = router;
