var expenseCategories;
(function (expenseCategories) {
    expenseCategories["rent"] = "Rent";
    expenseCategories["grocories"] = "Grocories";
    expenseCategories["clothing"] = "Clothing";
    expenseCategories["bills"] = "Bills";
    expenseCategories["entertainment"] = "Entertainment";
    expenseCategories["restaurants"] = "Restaurants";
    expenseCategories["general"] = "General";
})(expenseCategories || (expenseCategories = {}));
var incomCategories;
(function (incomCategories) {
    incomCategories["salary"] = "Salary";
    incomCategories["gift"] = "Gift";
    incomCategories["general"] = "General";
    incomCategories["bonus"] = "Bonus";
})(incomCategories || (incomCategories = {}));
var expenses = [
    {
        name: "Rent",
        category: expenseCategories.rent,
        sum: "1,000"
    },
    {
        name: "Market",
        category: expenseCategories.grocories,
        sum: "67"
    },
    {
        name: "H&M",
        category: expenseCategories.clothing,
        sum: "98"
    },
];
