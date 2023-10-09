import { mysqlTable, int, text } from "drizzle-orm/mysql-core";

export const movies = mysqlTable("movies", {
  id: int("id").primaryKey(),
  title: text("title"),
  email: text("year"),
});
