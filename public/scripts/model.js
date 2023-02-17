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
