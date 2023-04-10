import type { NextApiRequest, NextApiResponse } from "next";

// get the client
const mysql = require("mysql2");

// create the connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  try {
    connection.query(
      "SELECT * FROM `attractions` WHERE `id` = ?",
      [id],
      function (err: any, results: any) {
        return res.status(200).json({ status: "ok", results });
      }
    );
  } catch (err: any) {
    res.status(400).json({ status: "error", message: err.message });
  }
}
