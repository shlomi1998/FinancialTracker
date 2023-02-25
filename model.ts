class User {
    username: string;
    password: string;
    incomes:Array<object>;
    expenses:Array<object>;
    isAdmin:boolean;

    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.incomes = [];
        this.expenses = [];
        this.isAdmin = false;
    }

}

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