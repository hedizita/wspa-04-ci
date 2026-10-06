import { afterAll, beforeEach, describe, expect, it } from "vitest";
import request from "supertest";
import { app } from "../src/app.js";
import { pool } from "../src/db/pool.js";

beforeEach(async () => {
	await pool.query("DELETE FROM expenses");
	await pool.query(
		`INSERT INTO expenses(description, amount, date) VALUES
        ('Groceries', 50.50, '2026-09-30'),
        ('Transport', 4.0, '2026-09-30');`,
	);
});

describe("Expenses GET /api/expenses method", () => {
	it("returns expenses", async () => {
		//ARRANGE

		//ACT
		const res = await request(app).get("/api/expenses");

		//ASSERT
		expect(res.status).toBe(200);
		expect(res.body).toHaveLength(2);
        expect(res.body[0]).toHaveProperty("description");
	});
});

afterAll(async () => {
	await pool.end();
});