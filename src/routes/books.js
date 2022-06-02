const { Router } = require('express');
const router = new Router();

const books = require('../sample.json');


router.get('/', (req, res) => {
    res.json(books);
});

module.exports = router;