import express from "express";
import { dbConnect } from "./db.mjs";
import exerciseRouter from "./routes/exercise.route.mjs";

const app = express();

app.use(express.json());
app.use("/api/exercises", exerciseRouter);

dbConnect();
const PORT = process.env.PORT | 3000;

app.get("/", (req, res) => {
  res.send("fit-x backend started");
});

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
