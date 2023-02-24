const hamburger = document.querySelector(
    ".sideBar__hamburger"
  ) as HTMLDivElement;
  hamburger.addEventListener("click", SideMenuClicked);
  let ClosesAndOpens = 0;
  const linksItems = document.querySelector(".liIncome , .liExpenses , .liGraph ") as HTMLLIElement  ;
  
  
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
      
      linksItems[0].style.opacity="1"
    
  
    } else {
      hamburger.style.marginLeft = "30px";
  
      sidebar.style.width = "80px";
      sidebarLogo.style.display = "none";
  
      userName.style.top = "5px";
    }
  }
  
  const divImgProfile=document.querySelector(".sideBar__user")as HTMLDivElement
  const userImg=document.querySelector(".sideBar__inputImg")as HTMLInputElement;
  const img :any = document.querySelector(".sideBar__profile")as HTMLImageElement;
  
  // const imageReg = /[\/.](gif|jpg|jpeg|tiff|png)$/i;
  // console.log(userImg)
  
  
  //lets work for image showing functionality when we choose an image to upload
  
  //when we choose a foto to upload
  userImg.addEventListener('change', function(){
      //this refers to file
   
          const choosedFile =this.files[0];
      
    
  
      if (choosedFile) {
  
          const reader = new FileReader(); //FileReader is a predefined function of JS
  
          reader.addEventListener('load', function(){
              img.setAttribute('src', reader.result);
          });
  
          reader.readAsDataURL(choosedFile);
  
          //Allright is done
  
          //please like the video
          //comment if have any issue related to vide & also rate my work in comment section
  
          //And aslo please subscribe for more tutorial like this
  
          //thanks for watching
      }
  });
  
  
  