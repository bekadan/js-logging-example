import express from "express";
import cors from "cors";

const port = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require("./routes/index");
app.use("/", routes);

app.listen(port, () => {
  console.log("app is running...");
});
