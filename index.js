import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import mainRouter from "./routes/mainRoute";

import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 3000;

const app = express();
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// app.get("/", (req, res) => {
//   res.status(200).send({ message: "Hello!" });
// });

app.use("/main", [mainRouter]);

app.use("/", (req, res) => {
  res.status(404).send({
    status: "not found",
    message: "Please check your URL",
  });
});

app.listen(port, () => {
  console.log(`application run in http://localhost:${port}`);
});
