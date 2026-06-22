const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    name: 'AURIS Governance API',
    version: '1.0.0',
    status: 'running'
  });
});

module.exports = app;
