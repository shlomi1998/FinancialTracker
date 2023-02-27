const logoutButton = document.querySelector('#logoutBtn');
const isLoggedInString:string | null = localStorage.getItem('isLoggedIn');


const hamburger = document.querySelector(
    ".sideBar__hamburger"
  ) as HTMLDivElement;
  hamburger.addEventListener("click", SideMenuClicked);
  let ClosesAndOpens = 0;
  const linksItems = document.querySelector(
    ".liIncome , .liExpenses , .liGraph "
  ) as HTMLLIElement;
  
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
  
      linksItems[0].style.opacity = "1";
    } else {
      hamburger.style.marginLeft = "30px";
  
      sidebar.style.width = "80px";
      sidebarLogo.style.display = "none";
  
      userName.style.top = "5px";
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
   let choosedFile
  if(this.files){
    const choosedFile = this.files[0];
  }else{
    const choosedFile =null;
  }
   
  
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
  const monthNum = currentDate.getMonth() - 1;
  const Year = currentDate.getFullYear() - 1;
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
  let uidExpense=1000;
  let sumIncom =0;
  let sumExpense =0;
   
  
  const totalAmount=document.querySelector(".calculationsContainer__currentSalary__p")as HTMLParagraphElement;
  // let totalAmount=0;
  
  
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
    expense__container.style.display="none";
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
        newIncom.innerHTML += ` <div class="calculationsContainer__TypesIncomes " id="${uidIncom}"> ${selectTypeIncom}  (${typeIncome}) &nbsp;&nbsp;&nbsp;&nbsp;  +  ${inputIncom} </div> <br>`;
        const moneyIsAvailable =document.querySelector(".calculationsContainer__incom__amountOfRevenue")as HTMLSpanElement;
        sumIncom += parseInt(inputIncom);
        moneyIsAvailable.innerHTML=` + ${sumIncom}`
        const endIncom =  parseInt(inputIncom)
        totalAmount.innerHTML=`${sumIncom-sumExpense}`
  
  
      }
    });
  });
  
  
  
  
  
  
  
  
  
  liExpenses?.addEventListener("click", (e) =>{
    
  
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
   enterIncome.style.display="none";
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
  
      if ( inputExpnse && selectTypeExpnse ) {
        uidExpense++;
        const newExpense = document.querySelector(
          ".calculationsContainer__TypesOfExpense"
        ) as HTMLDivElement;
        newExpense.innerHTML += ` <div class="calculationsContainer__TypesExpense " id="${uidExpense}" value ="${inputExpnse}"> ${selectTypeExpnse}  (${typeExpense}) &nbsp;&nbsp;&nbsp;&nbsp;  -  ${inputExpnse} <span class="RemoveIncome fa-solid fa-circle-minus"></span>
        </div> <br>`;
        const moneyIsAvailable =document.querySelector(".calculationsContainer__expnse__amountOfExpenses")as HTMLSpanElement;
        sumExpense += parseInt(inputExpnse);
        moneyIsAvailable.innerHTML=` - ${sumExpense}`
        totalAmount.innerHTML=`${sumIncom-sumExpense}`
        
      }
    });
  });
  
  
  
  
  
  
  liGraph?.addEventListener("click", (e) => {
    console.log("uuuu");
  });
  