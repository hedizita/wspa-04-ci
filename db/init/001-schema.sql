CREATE TABLE IF NOT EXISTS expenses(
    id              UUID            PRIMARY KEY DEFAULT gen_random_uuid(),
    description     TEXT            NOT NULL,
    amount          NUMERIC(10, 2)  NOT NULL,
    date            DATE            NOT NULL,
)

CREATE TABLE IF NOT EXISTS categories(
    id              UUID            PRIMARY KEY DEFAULT gen_random_uuid(),
    name            TEXT            NOT NULL,

)

INSERT INTO categories (name) VALUES ('Groceries', 'Transportation', 'Dining', 'Hobbies');

INSERT INTO expenses (description, amount, date) VALUES
    ("Groceries", 42.99, "2026-08-01"),
    ("Bus ticker", 3.40, "2026-09-01");