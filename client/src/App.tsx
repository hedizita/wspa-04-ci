import { useState } from "react";
import { ExpenseForm } from "./components/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList";
import { CategoryForm } from "./components/CategoryForm";
import { CategoryList } from "./components/CategoryList";
import { useExpenses } from "./hooks/useExpenses";
import { useCategories } from "./hooks/useCategories";

type View = "expenses" | "categories";

export function App() {
    const [view, setView] = useState<View>("expenses");
    const { expenses, addExpense, editExpense, removeExpense } = useExpenses();
    const { categories, addCategory, editCategory, removeCategory } = useCategories();

    return (
        <main>
            <h1>Expense Tracker</h1>
            <nav style={{ marginBottom: "1rem" }}>
                <button
                    type="button"
                    disabled={view === "expenses"}
                    onClick={() => setView("expenses")}
                >
                    Expenses
                </button>
                <button
                    type="button"
                    disabled={view === "categories"}
                    onClick={() => setView("categories")}
                >
                    Categories
                </button>
            </nav>

            {view === "expenses" ? (
                <>
                    <ExpenseForm onAdd={addExpense} />
                    <ExpenseList
                        expenses={expenses}
                        onUpdate={editExpense}
                        onDelete={removeExpense}
                    />
                </>
            ) : (
                <>
                    <CategoryForm onAdd={addCategory} />
                    <CategoryList
                        categories={categories}
                        onUpdate={editCategory}
                        onDelete={removeCategory}
                    />
                </>
            )}
        </main>
    );
}
export default App;
