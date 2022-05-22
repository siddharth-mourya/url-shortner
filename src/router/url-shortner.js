const router = require('express').Router();
const shortid = require('shortid')

router.get('/', (req, res) => {
    res.send('Shortening URLs for ya');
});

router.get('/:id', (req, res) => {

});

router.post('/shorten', (req, res) => {

});

router.post('/generate-qr', (req, res) => {

});

module.exports = router;