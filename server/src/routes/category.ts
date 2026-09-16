import { Router } from "express";
import {
    addCategory,
    deleteCategory,
    getCategories,
    updateCategory,
} from "../store/category.js";
import type { NewCategory } from "../types/category.js";

function parseNewCategory(body: unknown): NewCategory | null {
    if (!body || typeof body !== "object") return null;
    const candidate = body as Record<string, unknown>;
    if (typeof candidate.name !== "string" || !candidate.name.trim()) return null;
    return { name: candidate.name.trim() };
}

export const categoryRouter = Router();

categoryRouter.get("/", (_req, res) => {
    res.json(getCategories());
});

categoryRouter.post("/", (req, res) => {
    const parsed = parseNewCategory(req.body);
    if (!parsed) {
        res.status(400).json({ error: "name is required" });
        return;
    }
    const created = addCategory(parsed);
    res.status(201).json(created);
});

categoryRouter.put("/:id", (req, res) => {
    const parsed = parseNewCategory(req.body);
    if (!parsed) {
        res.status(400).json({ error: "name is required" });
        return;
    }
    const updated = updateCategory(req.params.id, parsed);
    if (!updated) {
        res.status(404).json({ error: "Category not found" });
        return;
    }
    res.json(updated);
});

categoryRouter.delete("/:id", (req, res) => {
    const deleted = deleteCategory(req.params.id);
    if (!deleted) {
        res.status(404).json({ error: "Category not found" });
        return;
    }
    res.status(204).send();
});
