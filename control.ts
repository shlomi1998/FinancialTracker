interface IExpense {
  name: string;
  category: string;
  sum: string;
}

interface IIncome {
  name: string;
  category: string;
  sum: number;
}

const expenses: IExpense[] = [
  {
    name: "Rent",
    category: "rent",
    sum: "1,000",
  },
  {
    name: "Market",
    category: "grocories",
    sum: "67",
  },
  {
    name: "H&M",
    category: "clothing",
    sum: "98",
  },
];

