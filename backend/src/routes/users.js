const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    users: [],
    total: 0
  });
});

module.exports = router;
