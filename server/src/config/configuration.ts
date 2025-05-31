export default () => ({
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3001,
  database: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
  },
});
