import express from "express";
import cors from "cors";
import { expenseRouter } from "./routes/expense.js";
import { categoryRouter } from "./routes/category.js";

export const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/expenses", expenseRouter);
app.use("/api/categories", categoryRouter);
