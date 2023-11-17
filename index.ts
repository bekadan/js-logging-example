import express from "express";
import cors from "cors";
import { logger } from "./bin/logger";

const port = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

const routes = require("./routes/index");
app.use("/", routes);

app.listen(port, () => {
  console.log("app is running...");
});
