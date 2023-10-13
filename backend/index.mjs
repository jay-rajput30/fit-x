import express from "express";
import { dbConnect } from "./db.mjs";

const app = express();

app.use(express.json());

dbConnect();
const PORT = process.env.PORT | 3000;

app.get("/", (req, res) => {
  res.send("fit-x backend started");
});

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
