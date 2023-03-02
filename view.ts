const logoutButton = document.querySelector("#logoutBtn");
const isLoggedInString: string | null = localStorage.getItem("isLoggedIn");

const hamburger = document.querySelector(
  ".sideBar__hamburger"
) as HTMLDivElement;
hamburger.addEventListener("click", SideMenuClicked);
const sidebar_icons = document.querySelectorAll(".sideBar_icons");
let ClosesAndOpens = 0;
const linksItems: any = document.querySelectorAll("a");

function SideMenuClicked(e) {
  const sidebar = document.querySelector(".sideBar ") as HTMLDivElement;
  const sidebarLogo = document.querySelector(
    ".sideBar__logo"
  ) as HTMLDivElement;
  const userName = document.querySelector(
    ".sideBar__profile__details"
  ) as HTMLSpanElement;

  ClosesAndOpens++;
  if (ClosesAndOpens % 2 == 1) {
    sidebar.style.width = "250px";
    hamburger.style.marginLeft = "200px";
    sidebarLogo.style.display = "block";

    userName.style.top = "-20px";
    userName.style.marginLeft = "-80px";

   
  } else {
    
    hamburger.style.marginLeft = "30px";
    sidebar.style.width = "90px";
    sidebarLogo.style.display = "none";

    userName.style.marginLeft = "30px";
    userName.style.top = "-20px";
  }
}

const divImgProfile = document.querySelector(
  ".sideBar__user"
) as HTMLDivElement;
const userImg = document.querySelector(
  ".sideBar__inputImg"
) as HTMLInputElement;
const img: any = document.querySelector(
  ".sideBar__profile"
) as HTMLImageElement;

// const imageReg = /[\/.](gif|jpg|jpeg|tiff|png)$/i;
// console.log(userImg)

//lets work for image showing functionality when we choose an image to upload

//when we choose a foto to upload
userImg.addEventListener("change", function () {
  //this refers to file

  const choosedFile = this.files[0];

  if (choosedFile) {
    const reader = new FileReader(); //FileReader is a predefined function of JS

    reader.addEventListener("load", function () {
      img.setAttribute("src", reader.result);
    });

    reader.readAsDataURL(choosedFile);

    //Allright is done

    //please like the video
    //comment if have any issue related to vide & also rate my work in comment section

    //And aslo please subscribe for more tutorial like this

    //thanks for watching
  }
});

const currentDate = new Date();
const month: string[] = [
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
let uidIncom = 0;
let uidExpense = 1000;
let sumIncom = 0;
let sumExpense = 0;

let listExpenseId:number[]=[];
let listExpenseInputValue:number[]=[];

const totalAmount = document.querySelector(
  ".calculationsContainer__currentSalary__p"
) as HTMLParagraphElement;
// let totalAmount=0;
let specificPercentages;




liIncome?.addEventListener("click", (e) => {
  enterIncome.innerHTML = `
    <h3 class="income__container__titel">Insert an incom</h3>
    <input class="income__container__income" type="number">
    <input class="income__container__typeIncome" type="text" placeholder="  Want to specify what?">
    <select class="income__container__selectTypeIncom" >
    <option value="General">General</option>
     <option value="Rent">Rent</option>
     <option value="Grocories">Grocories</option>
     <option value="Entertainment">Entertainment</option>
     <option value="Restaurants">Restaurants</option>
     <option value="Bills">Bills</option>
    
     </select>
     <button class="income__container__buttonAdd">add</button>
   `;
  expense__container.style.display = "none";
  enterIncome.style.display = "block";

  const buttonIncome = document.querySelector(
    ".income__container__buttonAdd"
  ) as HTMLButtonElement;
  buttonIncome.addEventListener("click", (e) => {
    enterIncome.style.display = "none";

    const inputIncom = (
      document.querySelector(".income__container__income") as HTMLInputElement
    ).value;
    const typeIncome = (
      document.querySelector(
        ".income__container__typeIncome"
      ) as HTMLInputElement
    ).value;
    const selectTypeIncom = (
      document.querySelector(
        ".income__container__selectTypeIncom"
      ) as HTMLSelectElement
    ).value;

    

    if (inputIncom && selectTypeIncom) {

      




   


   


   
      
    





      uidIncom++;
      const newIncom = document.querySelector(
        ".calculationsContainer__TypesOfIncom"
      ) as HTMLDivElement;
      newIncom.innerHTML += ` <div class="calculationsContainer__TypesIncomes " id="${inputIncom}">
       ${selectTypeIncom}  ("${typeIncome}") &nbsp;&nbsp;&nbsp;&nbsp;  +  ${inputIncom} 
       <span class="RemoveIncome fa-solid fa-circle-minus" id="${inputIncom}"></span> </div>
        <br>`;

  //       console.log(typeof( selectTypeIncom))


     









      const moneyIsAvailable = document.querySelector(
        ".calculationsContainer__incom__amountOfRevenue"
      ) as HTMLSpanElement;
      sumIncom += parseInt(inputIncom);
      moneyIsAvailable.innerHTML = ` + ${sumIncom}`;
      const endIncom = parseInt(inputIncom);
      totalAmount.innerHTML = `${sumIncom - sumExpense}`;
      let expnse__percentage = document.querySelector(
        ".calculationsContainer__expnse__percentage"
      ) as HTMLSpanElement;
      let percentage = isWhatPercentOf(sumExpense, sumIncom);
      expnse__percentage.innerHTML = `${percentage}%`;

      let iconRemoveIncome:any = document.querySelectorAll(".RemoveIncome");

      let refreshPercentages:any = document.querySelectorAll(".Percentage");

      refreshPercentages.forEach(element => {
        let chang=isWhatPercentOf(parseInt(element.id),sumIncom)
         element.innerHTML=`${chang}%`
       });


  

      iconRemoveIncome.forEach(element => {
      element.addEventListener("click",(e)=> {
        sumIncom -= parseInt(e.target.id) ;
        moneyIsAvailable.innerHTML = ` ${sumIncom}`;
        totalAmount.innerHTML = `${sumIncom - sumExpense}`;
        let newPercentage=isWhatPercentOf(sumExpense, sumIncom);
        expnse__percentage.innerHTML = `${newPercentage}%`;
       

        refreshPercentages.forEach(element => {
          let chang=isWhatPercentOf(parseInt(element.id),sumIncom)
           element.innerHTML=`${chang}%`
         });
        
         document.getElementById(e.target.id)?.remove();
      });
      
      
      });

      
    }
  });
});

let newExpense = document.querySelector(
  ".calculationsContainer__TypesOfExpense"
) as HTMLDivElement;

liExpenses?.addEventListener("click", (e) => {
  expense__container.innerHTML = `
    <h3 class="expense__container__titel">Insert an expense</h3>
      <input class="expense__container__expense" type="number">
      <input class="expense__container__typeExpense" type="text" placeholder="Want to specify what?">
      <select class="expense__container__selectTypeExpense" >
        <option value="Rent">Rent</option>
        <option value="Grocories">Grocories</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Restaurants">Restaurants</option>
        <option value="Bills">Bills</option>
        <option value="General">General</option>
      </select>
    <button class="expense__container__buttonAdd">add</button>
  
   `;
  enterIncome.style.display = "none";
  expense__container.style.display = "block";

  const buttonExpnse = document.querySelector(
    ".expense__container__buttonAdd"
  ) as HTMLButtonElement;

  buttonExpnse.addEventListener("click", (e) => {
    expense__container.style.display = "none";

    const inputExpnse = (
      document.querySelector(".expense__container__expense") as HTMLInputElement
    ).value;
    const typeExpense = (
      document.querySelector(
        ".expense__container__typeExpense"
      ) as HTMLInputElement
    ).value;
    const selectTypeExpnse = (
      document.querySelector(
        ".expense__container__selectTypeExpense"
      ) as HTMLSelectElement
    ).value;

    if (inputExpnse && selectTypeExpnse) {



      switch (selectTypeExpnse) {
        case "Rent" :
        sumRent(1)
          break;
        case "Grocories"  :
          sumGrocories(1)
          break;
        case "Entertainment" :
          sumEntertainment(1)
          break;
        case "Restaurants" :
          sumRestaurants(1)
          break;
        case  "Bills" :
          sumBills(1) ;
          break;
        case "General" :
          sumGeneral(1)
          break;
       
          
      }












      uidExpense++;
      sumExpense += parseInt(inputExpnse);
      let specificPercentages = isWhatPercentOf(inputExpnse, sumIncom);
      newExpense.innerHTML += ` 
      <div class="calculationsContainer__TypesExpense " id="${inputExpnse}">
       ${selectTypeExpnse}  (${typeExpense}) &nbsp;&nbsp; - ${inputExpnse} 
       <span class="Percentage"  id="${inputExpnse}" > ${specificPercentages}% </span>
       <span class=" RemoveExpnse fa-solid fa-circle-minus" id="${inputExpnse}"   ></span>
        </div> <br>`;

      const moneyIsAvailable = document.querySelector(
        ".calculationsContainer__expnse__amountOfExpenses"
      ) as HTMLSpanElement;
      
      moneyIsAvailable.innerHTML = ` - ${sumExpense}`;
      totalAmount.innerHTML = `${sumIncom - sumExpense}`;
      let expnse__percentage = document.querySelector(
        ".calculationsContainer__expnse__percentage"
      ) as HTMLSpanElement;
      let percentage = isWhatPercentOf(sumExpense, sumIncom);
      expnse__percentage.innerHTML = `${percentage}%`;
      
      
      let iconRemoveExpense:any = document.querySelectorAll(".RemoveExpnse");

      let refreshPercentages:any = document.querySelectorAll(".Percentage");
      refreshPercentages.forEach(element => {
        let chang=isWhatPercentOf(parseInt(element.id),sumIncom)
         element.innerHTML=`${chang}%`
       });

      iconRemoveExpense.forEach(element => {
      element.addEventListener("click",(e)=> {
        sumExpense -= parseInt(e.target.id) ;
        moneyIsAvailable.innerHTML = ` - ${sumExpense}`;
        totalAmount.innerHTML = `${sumIncom + sumExpense}`;
        let newPercentage=isWhatPercentOf(sumExpense, sumIncom);
        expnse__percentage.innerHTML = `${newPercentage}%`;
        document.getElementById(e.target.id)?.remove();
        
        refreshPercentages.forEach(element => {
          let chang=isWhatPercentOf(parseInt(element.id),sumIncom)
           element.innerHTML=`${chang}%`
         });

      });
      
      
      });
    
    }
  });
});



let totalRent :number=0;
let totalGrocories :number=0;
let totalEntertainment :number=0;
let totalRestaurants :number=0;
let totalBills:number=0;
let totalGeneral:number=0;





function sumRent( sumRen:number):void{
 totalRent+=sumRen;
 localStorage.setItem('totalRent',JSON.stringify(totalRent));

 
}

 function sumGrocories(sumGrocories:number):void{
totalGrocories+=sumGrocories;
localStorage.setItem('totalGrocories',JSON.stringify(totalGrocories));

 }
function sumEntertainment(sumEntertainment:number):void{
totalEntertainment+=sumEntertainment;
localStorage.setItem('totalEntertainment',JSON.stringify(totalEntertainment));
}
function sumRestaurants(sumRestaurants:number):void{
  totalRestaurants+=sumRestaurants;
 localStorage.setItem('totalRestaurants',JSON.stringify(totalRestaurants));

}
function sumBills(sumBills:number):void{
  totalBills+=sumBills;
  localStorage.setItem('totalBills',JSON.stringify(totalBills));

}

 function sumGeneral(sumGeneral:number):void{
  totalGeneral+=sumGeneral;
 localStorage.setItem('totalGeneral',JSON.stringify(totalGeneral));

 }

window.addEventListener('load',(e){  
 totalRent =0;
 localStorage.setItem('totalEntertainment',JSON.stringify(totalEntertainment));
 totalGrocories =0;
 localStorage.setItem('totalGrocories',JSON.stringify(totalGrocories));
 totalEntertainment =0;
 localStorage.setItem('totalEntertainment',JSON.stringify(totalEntertainment));
 totalRestaurants =0;
 localStorage.setItem('totalRestaurants',JSON.stringify(totalRestaurants));
 totalBills=0;
 localStorage.setItem('totalBills',JSON.stringify(totalBills));
 totalGeneral=0;
 localStorage.setItem('totalGeneral',JSON.stringify(totalGeneral));
 
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














liGraph?.addEventListener("click", (e) => {
  // window.close();
  window.open("graph.html");
});

function isWhatPercentOf(x, y): number {
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


function uniqueId  () {
  const dateString = Date.now().toString(36);
  const randomness = Math.random().toString(36).substr(2);
  return dateString + randomness;
};
