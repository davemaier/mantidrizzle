import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { movies } from "./schema";
import { sql } from "drizzle-orm";

const connection = await mysql.createConnection({
  host: "127.0.0.1",
  user: "manticore",
  port: 9306,
  database: "Manticore",
});

const db = drizzle(connection);

const test = await db
  .select({ title: movies.title, weight: sql`weight()` })
  .from(movies)
  .where(sql`match('day')`)
  .orderBy(sql`title asc`);

console.log(test.map((x) => x.weight));
