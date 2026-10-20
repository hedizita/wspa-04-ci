import { Pool } from "pg";

export const pool = new Pool({
	host: process.env.PGHOST,
	port: Number(process.env.PGPORT),
	user: process.env.PGUser,
	password: process.env.PGPASSWORD,
	database: process.env.PGDATABASE,
});
