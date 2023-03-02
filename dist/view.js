var logoutButton = document.querySelector("#logoutBtn");
var isLoggedInString = localStorage.getItem("isLoggedIn");
var hamburger = document.querySelector(".sideBar__hamburger");
hamburger.addEventListener("click", SideMenuClicked);
var sidebar_icons = document.querySelectorAll(".sideBar_icons");
var ClosesAndOpens = 0;
var linksItems = document.querySelectorAll("a");
function SideMenuClicked(e) {
    var sidebar = document.querySelector(".sideBar ");
    var sidebarLogo = document.querySelector(".sideBar__logo");
    var userName = document.querySelector(".sideBar__profile__details");
    ClosesAndOpens++;
    if (ClosesAndOpens % 2 == 1) {
        sidebar.style.width = "250px";
        hamburger.style.marginLeft = "200px";
        sidebarLogo.style.display = "block";
        userName.style.top = "-20px";
        userName.style.marginLeft = "-80px";
    }
    else {
        hamburger.style.marginLeft = "30px";
        sidebar.style.width = "90px";
        sidebarLogo.style.display = "none";
        userName.style.marginLeft = "30px";
        userName.style.top = "-20px";
    }
}
var divImgProfile = document.querySelector(".sideBar__user");
var userImg = document.querySelector(".sideBar__inputImg");
var img = document.querySelector(".sideBar__profile");
// const imageReg = /[\/.](gif|jpg|jpeg|tiff|png)$/i;
// console.log(userImg)
//lets work for image showing functionality when we choose an image to upload
//when we choose a foto to upload
userImg.addEventListener("change", function () {
    //this refers to file
    var choosedFile = this.files[0];
    if (choosedFile) {
        var reader_1 = new FileReader(); //FileReader is a predefined function of JS
        reader_1.addEventListener("load", function () {
            img.setAttribute("src", reader_1.result);
        });
        reader_1.readAsDataURL(choosedFile);
        //Allright is done
        //please like the video
        //comment if have any issue related to vide & also rate my work in comment section
        //And aslo please subscribe for more tutorial like this
        //thanks for watching
    }
});
var currentDate = new Date();
var month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "june",
    "july",
    "August",
    "September",
    "October",
    "November",
    "December",
];
var availableBudget = document.querySelector(".monthAndYear");
var monthNum = currentDate.getMonth();
var Year = currentDate.getFullYear();
var monthInString = month[monthNum];
availableBudget.innerHTML = "available Budget in " + monthInString + " " + Year;
var liIncome = document.querySelector(".liIncome");
var liExpenses = document.querySelector(".liExpenses");
var liGraph = document.querySelector(".liGraph");
var enterIncome = document.querySelector(".income__container");
var expense__container = document.querySelector(".expense__container");
var uidIncom = 0;
var uidExpense = 1000;
var sumIncom = 0;
var sumExpense = 0;
var listExpenseId = [];
var listExpenseInputValue = [];
var totalAmount = document.querySelector(".calculationsContainer__currentSalary__p");
// let totalAmount=0;
var specificPercentages;
liIncome === null || liIncome === void 0 ? void 0 : liIncome.addEventListener("click", function (e) {
    enterIncome.innerHTML = "\n    <h3 class=\"income__container__titel\">Insert an incom</h3>\n    <input class=\"income__container__income\" type=\"number\">\n    <input class=\"income__container__typeIncome\" type=\"text\" placeholder=\"  Want to specify what?\">\n    <select class=\"income__container__selectTypeIncom\" >\n    <option value=\"General\">General</option>\n     <option value=\"Rent\">Rent</option>\n     <option value=\"Grocories\">Grocories</option>\n     <option value=\"Entertainment\">Entertainment</option>\n     <option value=\"Restaurants\">Restaurants</option>\n     <option value=\"Bills\">Bills</option>\n    \n     </select>\n     <button class=\"income__container__buttonAdd\">add</button>\n   ";
    expense__container.style.display = "none";
    enterIncome.style.display = "block";
    var buttonIncome = document.querySelector(".income__container__buttonAdd");
    buttonIncome.addEventListener("click", function (e) {
        enterIncome.style.display = "none";
        var inputIncom = document.querySelector(".income__container__income").value;
        var typeIncome = document.querySelector(".income__container__typeIncome").value;
        var selectTypeIncom = document.querySelector(".income__container__selectTypeIncom").value;
        if (inputIncom && selectTypeIncom) {
            uidIncom++;
            var newIncom = document.querySelector(".calculationsContainer__TypesOfIncom");
            newIncom.innerHTML += " <div class=\"calculationsContainer__TypesIncomes \" id=\"" + inputIncom + "\">\n       " + selectTypeIncom + "  (" + typeIncome + ") &nbsp;&nbsp;&nbsp;&nbsp;  +  " + inputIncom + " \n       <span class=\"RemoveIncome fa-solid fa-circle-minus\" id=\"" + inputIncom + "\"></span> </div>\n        <br>";
            //       console.log(typeof( selectTypeIncom))
            var moneyIsAvailable_1 = document.querySelector(".calculationsContainer__incom__amountOfRevenue");
            sumIncom += parseInt(inputIncom);
            moneyIsAvailable_1.innerHTML = " + " + sumIncom;
            var endIncom = parseInt(inputIncom);
            totalAmount.innerHTML = "" + (sumIncom - sumExpense);
            var expnse__percentage_1 = document.querySelector(".calculationsContainer__expnse__percentage");
            var percentage = isWhatPercentOf(sumExpense, sumIncom);
            expnse__percentage_1.innerHTML = percentage + "%";
            var iconRemoveIncome = document.querySelectorAll(".RemoveIncome");
            var refreshPercentages_1 = document.querySelectorAll(".Percentage");
            refreshPercentages_1.forEach(function (element) {
                var chang = isWhatPercentOf(parseInt(element.id), sumIncom);
                element.innerHTML = chang + "%";
            });
            iconRemoveIncome.forEach(function (element) {
                element.addEventListener("click", function (e) {
                    var _a;
                    sumIncom -= parseInt(e.target.id);
                    moneyIsAvailable_1.innerHTML = " " + sumIncom;
                    totalAmount.innerHTML = "" + (sumIncom - sumExpense);
                    var newPercentage = isWhatPercentOf(sumExpense, sumIncom);
                    expnse__percentage_1.innerHTML = newPercentage + "%";
                    refreshPercentages_1.forEach(function (element) {
                        var chang = isWhatPercentOf(parseInt(element.id), sumIncom);
                        element.innerHTML = chang + "%";
                    });
                    (_a = document.getElementById(e.target.id)) === null || _a === void 0 ? void 0 : _a.remove();
                });
            });
        }
    });
});
var newExpense = document.querySelector(".calculationsContainer__TypesOfExpense");
liExpenses === null || liExpenses === void 0 ? void 0 : liExpenses.addEventListener("click", function (e) {
    expense__container.innerHTML = "\n    <h3 class=\"expense__container__titel\">Insert an expense</h3>\n      <input class=\"expense__container__expense\" type=\"number\">\n      <input class=\"expense__container__typeExpense\" type=\"text\" placeholder=\"Want to specify what?\">\n      <select class=\"expense__container__selectTypeExpense\" >\n        <option value=\"Rent\">Rent</option>\n        <option value=\"Grocories\">Grocories</option>\n        <option value=\"Entertainment\">Entertainment</option>\n        <option value=\"Restaurants\">Restaurants</option>\n        <option value=\"Bills\">Bills</option>\n        <option value=\"General\">General</option>\n      </select>\n    <button class=\"expense__container__buttonAdd\">add</button>\n  \n   ";
    enterIncome.style.display = "none";
    expense__container.style.display = "block";
    var buttonExpnse = document.querySelector(".expense__container__buttonAdd");
    buttonExpnse.addEventListener("click", function (e) {
        expense__container.style.display = "none";
        var inputExpnse = document.querySelector(".expense__container__expense").value;
        var typeExpense = document.querySelector(".expense__container__typeExpense").value;
        var selectTypeExpnse = document.querySelector(".expense__container__selectTypeExpense").value;
        if (inputExpnse && selectTypeExpnse) {
            switch (selectTypeExpnse) {
                case "Rent":
                    sumRent(1);
                    break;
                case "Grocories":
                    sumGrocories(1);
                    break;
                case "Entertainment":
                    sumEntertainment(1);
                    break;
                case "Restaurants":
                    sumRestaurants(1);
                    break;
                case "Bills":
                    sumBills(1);
                    break;
                case "General":
                    sumGeneral(1);
                    break;
            }
            uidExpense++;
            sumExpense += parseInt(inputExpnse);
            var specificPercentages_1 = isWhatPercentOf(inputExpnse, sumIncom);
            newExpense.innerHTML += " \n      <div class=\"calculationsContainer__TypesExpense \" id=\"" + inputExpnse + "\">\n       " + selectTypeExpnse + "  (" + typeExpense + ") &nbsp;&nbsp; - " + inputExpnse + " \n       <span class=\"Percentage\"  id=\"" + inputExpnse + "\" > " + specificPercentages_1 + "% </span>\n       <span class=\" RemoveExpnse fa-solid fa-circle-minus\" id=\"" + inputExpnse + "\"   ></span>\n        </div> <br>";
            var moneyIsAvailable_2 = document.querySelector(".calculationsContainer__expnse__amountOfExpenses");
            moneyIsAvailable_2.innerHTML = " - " + sumExpense;
            totalAmount.innerHTML = "" + (sumIncom - sumExpense);
            var expnse__percentage_2 = document.querySelector(".calculationsContainer__expnse__percentage");
            var percentage = isWhatPercentOf(sumExpense, sumIncom);
            expnse__percentage_2.innerHTML = percentage + "%";
            var iconRemoveExpense = document.querySelectorAll(".RemoveExpnse");
            var refreshPercentages_2 = document.querySelectorAll(".Percentage");
            refreshPercentages_2.forEach(function (element) {
                var chang = isWhatPercentOf(parseInt(element.id), sumIncom);
                element.innerHTML = chang + "%";
            });
            iconRemoveExpense.forEach(function (element) {
                element.addEventListener("click", function (e) {
                    var _a;
                    sumExpense -= parseInt(e.target.id);
                    moneyIsAvailable_2.innerHTML = " - " + sumExpense;
                    totalAmount.innerHTML = "" + (sumIncom + sumExpense);
                    var newPercentage = isWhatPercentOf(sumExpense, sumIncom);
                    expnse__percentage_2.innerHTML = newPercentage + "%";
                    (_a = document.getElementById(e.target.id)) === null || _a === void 0 ? void 0 : _a.remove();
                    refreshPercentages_2.forEach(function (element) {
                        var chang = isWhatPercentOf(parseInt(element.id), sumIncom);
                        element.innerHTML = chang + "%";
                    });
                });
            });
        }
    });
});
var totalRent = 0;
var totalGrocories = 0;
var totalEntertainment = 0;
var totalRestaurants = 0;
var totalBills = 0;
var totalGeneral = 0;
function sumRent(sumRen) {
    totalRent += sumRen;
    localStorage.setItem('totalRent', JSON.stringify(totalRent));
}
function sumGrocories(sumGrocories) {
    totalGrocories += sumGrocories;
    localStorage.setItem('totalGrocories', JSON.stringify(totalGrocories));
}
function sumEntertainment(sumEntertainment) {
    totalEntertainment += sumEntertainment;
    localStorage.setItem('totalEntertainment', JSON.stringify(totalEntertainment));
}
function sumRestaurants(sumRestaurants) {
    totalRestaurants += sumRestaurants;
    localStorage.setItem('totalRestaurants', JSON.stringify(totalRestaurants));
}
function sumBills(sumBills) {
    totalBills += sumBills;
    localStorage.setItem('totalBills', JSON.stringify(totalBills));
}
function sumGeneral(sumGeneral) {
    totalGeneral += sumGeneral;
    localStorage.setItem('totalGeneral', JSON.stringify(totalGeneral));
}
window.addEventListener('load', function (e) {
    totalRent = 0;
    localStorage.setItem('totalEntertainment', JSON.stringify(totalEntertainment));
    totalGrocories = 0;
    localStorage.setItem('totalGrocories', JSON.stringify(totalGrocories));
    totalEntertainment = 0;
    localStorage.setItem('totalEntertainment', JSON.stringify(totalEntertainment));
    totalRestaurants = 0;
    localStorage.setItem('totalRestaurants', JSON.stringify(totalRestaurants));
    totalBills = 0;
    localStorage.setItem('totalBills', JSON.stringify(totalBills));
    totalGeneral = 0;
    localStorage.setItem('totalGeneral', JSON.stringify(totalGeneral));
});
//  const iconRemove :any = document.querySelectorAll(".RemoveExpnse");
//  listExpenseId.forEach((expenseId,index) => {
//  let indexId=document.querySelector("#uidExpense")
//  indexId?.addEventListener("click", () =>{
//   document.getElementById("#uidExpense")?.remove();
//  });
//  });
//  iconRemove.addEventListener("click", (e) =>{
//  });
liGraph === null || liGraph === void 0 ? void 0 : liGraph.addEventListener("click", function (e) {
    // window.close();
    window.open("graph.html");
});
function isWhatPercentOf(x, y) {
    return Math.round((x / y) * 100);
}
//   // 👇️ `30` is 40% of `75`
//   console.log(isWhatPercentOf(30, 75)); // 👉️ 40
//   // 👇️ `20` is 26.666% of `75`
//   console.log(isWhatPercentOf(20, 75));
// const removeAnElement = document.querySelector(
//   ".RemoveIncome "
// ) as HTMLDivElement;
// removeAnElement.addEventListener("click", (e) => {});
function uniqueId() {
    var dateString = Date.now().toString(36);
    var randomness = Math.random().toString(36).substr(2);
    return dateString + randomness;
}
;
