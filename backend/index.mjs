import express from "express";
import { dbConnect } from "./db.mjs";
import exerciseRouter from "./routes/exercise.route.mjs";
import foodRouter from "./routes/food.route.mjs";
import goalRouter from "./routes/goal.route.mjs";

//hosted BE link: https://fitxbe.onrender.com

const app = express();

app.use(express.json());
app.use("/api/exercises", exerciseRouter);
app.use("/api/food", foodRouter);
app.use("/api/goals", goalRouter);

dbConnect();
const PORT = process.env.PORT | 3000;

app.get("/", (req, res) => {
  res.send("fit-x backend started");
});

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
