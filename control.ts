interface IExpense {
  name: string;
  category: expenseCategories;
  sum: string;
}

interface IIncome {
  name: string;
  category: string;
  sum: number;
}

enum expenseCategories {
  rent = "Rent",
  grocories = "Grocories",
  clothing = "Clothing",
  bills = "Bills",
  entertainment = "Entertainment",
  restaurants = "Restaurants",
  general = "General",
}

enum incomCategories {
  salary = "Salary",
  gift = "Gift",
  general = "General",
  bonus = "Bonus",
}

const expenses: IExpense[] = [
  {
    name: "Rent",
    category: expenseCategories.rent,
    sum: "1,000",
  },
  {
    name: "Market",
    category: expenseCategories.grocories,
    sum: "67",
  },
  {
    name: "H&M",
    category: expenseCategories.clothing,
    sum: "98",
  },
];
