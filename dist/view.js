var logoutButton = document.querySelector('#logoutBtn');
var isLoggedInString = localStorage.getItem('isLoggedIn');
var hamburger = document.querySelector(".sideBar__hamburger");
hamburger.addEventListener("click", SideMenuClicked);
var ClosesAndOpens = 0;
var linksItems = document.querySelector(".liIncome , .liExpenses , .liGraph ");
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
        linksItems[0].style.opacity = "1";
    }
    else {
        hamburger.style.marginLeft = "30px";
        sidebar.style.width = "80px";
        sidebarLogo.style.display = "none";
        userName.style.top = "5px";
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
    var choosedFile;
    if (this.files) {
        var choosedFile_1 = this.files[0];
    }
    else {
        var choosedFile_2 = null;
    }
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
var monthNum = currentDate.getMonth() - 1;
var Year = currentDate.getFullYear() - 1;
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
var totalAmount = document.querySelector(".calculationsContainer__currentSalary__p");
// let totalAmount=0;
liIncome === null || liIncome === void 0 ? void 0 : liIncome.addEventListener("click", function (e) {
    enterIncome.innerHTML = "\n    <h3 class=\"income__container__titel\">Insert an incom</h3>\n     <input class=\"income__container__income\" type=\"number\">\n    <input class=\"income__container__typeIncome\" type=\"text\" placeholder=\"  Want to specify what?\">\n    <select class=\"income__container__selectTypeIncom\" >\n    <option value=\"General\">General</option>\n     <option value=\"Rent\">Rent</option>\n     <option value=\"Grocories\">Grocories</option>\n     <option value=\"Entertainment\">Entertainment</option>\n     <option value=\"Restaurants\">Restaurants</option>\n     <option value=\"Bills\">Bills</option>\n    \n     </select>\n     <button class=\"income__container__buttonAdd\">add</button>\n   ";
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
            newIncom.innerHTML += " <div class=\"calculationsContainer__TypesIncomes \" id=\"" + uidIncom + "\"> " + selectTypeIncom + "  (" + typeIncome + ") &nbsp;&nbsp;&nbsp;&nbsp;  +  " + inputIncom + " </div> <br>";
            var moneyIsAvailable = document.querySelector(".calculationsContainer__incom__amountOfRevenue");
            sumIncom += parseInt(inputIncom);
            moneyIsAvailable.innerHTML = " + " + sumIncom;
            var endIncom = parseInt(inputIncom);
            totalAmount.innerHTML = "" + (sumIncom - sumExpense);
        }
    });
});
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
            uidExpense++;
            var newExpense = document.querySelector(".calculationsContainer__TypesOfExpense");
            newExpense.innerHTML += " <div class=\"calculationsContainer__TypesExpense \" id=\"" + uidExpense + "\" value =\"" + inputExpnse + "\"> " + selectTypeExpnse + "  (" + typeExpense + ") &nbsp;&nbsp;&nbsp;&nbsp;  -  " + inputExpnse + " <span class=\"RemoveIncome fa-solid fa-circle-minus\"></span>\n        </div> <br>";
            var moneyIsAvailable = document.querySelector(".calculationsContainer__expnse__amountOfExpenses");
            sumExpense += parseInt(inputExpnse);
            moneyIsAvailable.innerHTML = " - " + sumExpense;
            totalAmount.innerHTML = "" + (sumIncom - sumExpense);
        }
    });
});
liGraph === null || liGraph === void 0 ? void 0 : liGraph.addEventListener("click", function (e) {
    console.log("uuuu");
});
