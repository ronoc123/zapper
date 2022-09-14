import * as pg from "pg";
const { Pool } = pg.default;
const pool = new Pool();
export default {
  query: (text, params) => pool.query(text, params),
};
