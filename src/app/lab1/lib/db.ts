//for connecting  Next.js app to a PostgreSQL database.
import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
  user: 'postgres',          // your Postgres username
  host: 'localhost',
  database: 'capstone_db',   // database name
  password: 'yourpassword',  // replace with your Postgres password
  port: 5432,
});
