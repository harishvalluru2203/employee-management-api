import * as mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
});

export const Employee = mongoose.model("Employee", employeeSchema, "employees");
