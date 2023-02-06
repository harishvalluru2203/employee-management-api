import { Router } from "express";
import { Employee } from "../models";

export const employeeRouter = Router();

employeeRouter.get("/", async (req, res) => {
  const employees = await Employee.find();
  res.send(employees);
});
