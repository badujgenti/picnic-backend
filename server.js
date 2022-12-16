import express from "express";
import cors from "cors";
import csvParser from "csv-parser";
import fs from "fs";

const app = express();
const port = 3000;

app.use(cors());
app.get("/", (req, res) => {
  const result = [];

  fs.createReadStream("./data.csv")
    .pipe(csvParser())
    .on("data", (data) => {
      result.push(data);
    })
    .on("end", () => {
      res.send(result);
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
