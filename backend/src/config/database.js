module.exports = {
  client: process.env.DB_CLIENT || 'postgresql',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'auris_governance',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || ''
};
