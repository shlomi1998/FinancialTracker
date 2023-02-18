enum EXPENSES_CATEGORIES {
  Rent = "Rent",
  Grocories = "Grocories",
  Clothing = "Clothing",
  Bills = "Bills",
  Entertainment = "Entertainment",
  Restaurants = "Restaurants",
  General = "General",
}
type EXPENSES_CATEGORIES_LITERALS = keyof typeof EXPENSES_CATEGORIES;

enum INCOME_CATEGORIES {
  Salary = "Salary",
  Gift = "Gift",
  General = "General",
  Bonus = "Bonus",
}

type INCOME_CATEGORIES_LITERALS = keyof typeof INCOME_CATEGORIES;

interface IExpense {
  name: string;
  category: EXPENSES_CATEGORIES_LITERALS;
  sum: number;
}

interface IIncome {
  name: string;
  category: INCOME_CATEGORIES_LITERALS;
  sum: number;
}

const expenses: IExpense[] = [
  {
    name: "Rent",
    category: EXPENSES_CATEGORIES.Rent,
    sum: 1000,
  },
  {
    name: "Market",
    category: EXPENSES_CATEGORIES.Grocories,
    sum: 67,
  },
  {
    name: "H&M",
    category: EXPENSES_CATEGORIES.Clothing,
    sum: 98,
  },
];

const incomes: IIncome[] = [
  {
    name: "pay",
    category: INCOME_CATEGORIES.Salary,
    sum: 1000,
  },
  {
    name: "dfbdf",
    category: INCOME_CATEGORIES.Bonus,
    sum: 2000,
  },
  {
    name: "dssdvsd",
    category: INCOME_CATEGORIES.General,
    sum: 98,
  },
];

type displayOptions = "INCOME" | "EXPENSE";

let currentlyDisplayed: displayOptions = "INCOME";

const toggleOptions = (newOption: displayOptions) => {
  currentlyDisplayed = newOption;
  render();
};

const render = () => {
  let currArr = currentlyDisplayed === "INCOME" ? incomes : expenses;
  const wrapper = document.getElementById("expensesWrapper");
  let elements = "";
  let currSum = 0;

  currArr.forEach((element) => {
    currSum += element.sum;
    elements += `<div class="singleExpenseWrapper">
    <div class="singleExpense">
      <div>name: ${element.name}</div>
      <div>amount: ${element.sum}</div>
    </div>
    <div>category: ${element.category}</div>
  </div>`;
  });
  if (wrapper)
    wrapper.innerHTML = ` <div class="expensesTitle">
  Total expenses are: ${currSum}$
</div>`;
  if (wrapper) wrapper.innerHTML += elements;
};
render();
