const express = require('express');

const healthRoute = require('./routes/health');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    name: 'AURIS Governance API',
    version: '1.0.0',
    status: 'running'
  });
});

app.use('/health', healthRoute);

module.exports = app;
