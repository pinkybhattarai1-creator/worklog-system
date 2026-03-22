const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('worklog API');
});
module.exports = router;