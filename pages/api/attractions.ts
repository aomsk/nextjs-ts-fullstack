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

export default (req: NextApiRequest, res: NextApiResponse) => {
  connection.query(
    "SELECT * FROM `attractions`",
    function (err: any, results: any) {
      res.status(200).json({ results });
    }
  );
};
