const express = require('express');

const router = express.Router();

router.post('/login', (req, res) => {
  res.json({
    message: 'Login endpoint',
    status: 'pending implementation'
  });
});

router.post('/register', (req, res) => {
  res.json({
    message: 'Register endpoint',
    status: 'pending implementation'
  });
});

module.exports = router;
