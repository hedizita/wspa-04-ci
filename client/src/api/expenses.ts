import type { Expense, NewExpense } from "../types/expense";

const getApiBase = (): string => {
	const envUrl = (window as Window & { __ENV__?: { API_URL?: string } }).__ENV__
		?.API_URL;
	if (envUrl && !envUrl.startsWith("${") && envUrl.trim() !== "") {
		return envUrl;
	}
	return import.meta.env.VITE_API_URL ?? "http://localhost:3001";
};

const BASE_URL = getApiBase().replace(/\/$/, "");
const API_URL = `${BASE_URL}/api/expenses`;

export async function fetchExpenses(): Promise<Expense[]> {
	const res = await fetch(API_URL);
	return res.json();
}

export async function createExpense(expense: NewExpense): Promise<Expense> {
	const res = await fetch(API_URL, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(expense),
	});
	return res.json();
}

export async function updateExpense(
	id: string,
	expense: NewExpense,
): Promise<Expense> {
	const res = await fetch(`${API_URL}/${id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(expense),
	});
	return res.json();
}

export async function deleteExpense(id: string): Promise<void> {
	await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}
