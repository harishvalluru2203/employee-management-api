import { employeeRouter } from "./employeeRouter";

export const masterRouter = (app) => {
  app.use("/employees", employeeRouter);
};
