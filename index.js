import express from "express";
import Connection from "./connection/db.js";
import route from "./route/routes.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/tasks", route);

const PORT = 8000;
Connection();

app.listen(PORT, () =>
  console.log(`Server is running sucessfully on PORT ${PORT}`)
);
