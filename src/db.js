import { createPool } from "mysql2/promise";

let pool;

export function initDB() {
  pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
  });
}

export function getPool() {
  if (!pool) {
    throw new Error("Database not initialized");
  }
  return pool;
}
