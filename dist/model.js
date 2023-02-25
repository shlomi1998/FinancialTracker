var User = /** @class */ (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
        this.incomes = [];
        this.expenses = [];
        this.isAdmin = false;
    }
    return User;
}());
var EXPENSES_CATEGORIES;
(function (EXPENSES_CATEGORIES) {
    EXPENSES_CATEGORIES["Rent"] = "Rent";
    EXPENSES_CATEGORIES["Grocories"] = "Grocories";
    EXPENSES_CATEGORIES["Clothing"] = "Clothing";
    EXPENSES_CATEGORIES["Bills"] = "Bills";
    EXPENSES_CATEGORIES["Entertainment"] = "Entertainment";
    EXPENSES_CATEGORIES["Restaurants"] = "Restaurants";
    EXPENSES_CATEGORIES["General"] = "General";
})(EXPENSES_CATEGORIES || (EXPENSES_CATEGORIES = {}));
var INCOME_CATEGORIES;
(function (INCOME_CATEGORIES) {
    INCOME_CATEGORIES["Salary"] = "Salary";
    INCOME_CATEGORIES["Gift"] = "Gift";
    INCOME_CATEGORIES["General"] = "General";
    INCOME_CATEGORIES["Bonus"] = "Bonus";
})(INCOME_CATEGORIES || (INCOME_CATEGORIES = {}));
