const logoutButton = document.querySelector("#logoutBtn");
const isLoggedInString: string | null = localStorage.getItem("isLoggedIn");

const hamburger = document.querySelector(
  ".sideBar__hamburger"
) as HTMLDivElement;

const sidebar_icons = document.querySelectorAll(".sideBar_icons");
let ClosesAndOpens = 0;
const linksItems: any = document.querySelectorAll("a");

const availableBudget = document.querySelector(
  ".monthAndYear"
) as HTMLHeadElement;
const monthNum = currentDate.getMonth();
const Year = currentDate.getFullYear();
const monthInString = month[monthNum];
availableBudget.innerHTML = `available Budget in ${monthInString} ${Year}`;

const liIncome: HTMLLIElement | null = document.querySelector(".liIncome");
const liExpenses: HTMLLIElement | null = document.querySelector(".liExpenses");
const liGraph: HTMLLIElement | null = document.querySelector(".liGraph");

const enterIncome = document.querySelector(
  ".income__container"
) as HTMLDivElement;

const expense__container = document.querySelector(
  ".expense__container"
) as HTMLDivElement;

const totalAmount = document.querySelector(
  ".calculationsContainer__currentSalary__p"
) as HTMLParagraphElement;
// let totalAmount=0;
let specificPercentages;

const newExpense = document.querySelector(
  ".calculationsContainer__TypesOfExpense"
) as HTMLDivElement;
