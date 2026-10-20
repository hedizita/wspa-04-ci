import cors from "cors";
import express from "express";
import { categoryRouter } from "./routes/category.js";
import { expenseRouter } from "./routes/expense.js";

export const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/expenses", expenseRouter);
app.use("/api/categories", categoryRouter);
