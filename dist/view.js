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
userImg.addEventListener('change', function () {
    //this refers to file
    var choosedFile = this.files[0];
    if (choosedFile) {
        var reader_1 = new FileReader(); //FileReader is a predefined function of JS
        reader_1.addEventListener('load', function () {
            img.setAttribute('src', reader_1.result);
        });
        reader_1.readAsDataURL(choosedFile);
        //Allright is done
        //please like the video
        //comment if have any issue related to vide & also rate my work in comment section
        //And aslo please subscribe for more tutorial like this
        //thanks for watching
    }
});
