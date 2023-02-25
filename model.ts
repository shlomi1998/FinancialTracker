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