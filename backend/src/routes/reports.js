const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    reports: [],
    total: 0
  });
});

module.exports = router;
