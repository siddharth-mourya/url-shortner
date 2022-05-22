const router = require("express").Router();
const validUrl = require("valid-url");
const shortid = require("shortid");

const baseURL = "https://localhost:3000";

router.get("/:code", (req, res) => {
    try {
        const url = await URL.findOne({
            urlShortCode: req.params.code
        })
        if (url) {
            return res.redirect(url.actualUrl)
        } else {
            return res.status(404).send('No URL Found')
        }
    }
    catch (err) {
        console.error(err)
        res.status(500).json('Server Error')
    }
});

router.post("/shorten", (req, res) => {
  const { actualUrl } = req.body;
  const urlShortCode = shortid.generate();
  if (validUrl.isUri(actualUrl)) {
    try {
        let url = await URL.findOne({
            actualUrl
        })
        if (url) {
            res.send(url)
        } else {
            const shortenedUrl = baseUrl + '/' + urlShortCode
            url = new Url({
                actualUrl,
                shortenedUrl,
                urlShortCode
            })
            await url.save()
            res.send(url)
        }
    } catch (error) {
      res.status(500).send("Server Error");
    }
  } else {
    res.status(401).send("Invalid URL");
  }
});

router.post("/generate-qr", (req, res) => {});

module.exports = router;
