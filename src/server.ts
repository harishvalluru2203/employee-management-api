import * as express from "express";
import { masterRouter } from "./routers/masterRouter";
const mongoose = require("mongoose");

const app = express();

const url = "mongodb://localhost:27017/employeeManagementDB";
mongoose.connect(url, {
  useNewUrlParser: true,
});

masterRouter(app);

app.listen(2020, () =>
  console.log("Employee Management - Express Server Started.")
);
