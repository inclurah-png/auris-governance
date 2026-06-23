const express = require('express');

const healthRoute = require('./routes/health');
const authRoute = require('./routes/auth');
const clientsRoute = require('./routes/clients');
const auditsRoute = require('./routes/audits');
const findingsRoute = require('./routes/findings');
const evidenceRoute = require('./routes/evidence');
const reportsRoute = require('./routes/reports');
const dashboardRoute = require('./routes/dashboard');
const organisationsRoute = require('./routes/organisations');
const usersRoute = require('./routes/users');
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
app.use('/auth', authRoute);
app.use('/clients', clientsRoute);
app.use('/audits', auditsRoute);
app.use('/findings', findingsRoute);
app.use('/evidence', evidenceRoute);
app.use('/reports', reportsRoute);
app.use('/dashboard', dashboardRoute);
app.use('/organisations', organisationsRoute);
app.use('/users', usersRoute);

module.exports = app;
