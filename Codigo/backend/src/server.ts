import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { routes } from "./routes";
var cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      message: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
