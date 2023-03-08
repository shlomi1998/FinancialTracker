function uniqueId() {
    var dateString = Date.now().toString(36);
    var randomness = Math.random().toString(36).substr(2);
    return dateString + randomness;
}
;
function isWhatPercentOf(x, y) {
    return Math.round((x / y) * 100);
}
liGraph === null || liGraph === void 0 ? void 0 : liGraph.addEventListener("click", function (e) {
    // window.close();
    window.open("graph.html");
});
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
// const imageReg = /[\/.](gif|jpg|jpeg|tiff|png)$/i;
// console.log(userImg)
//lets work for image showing functionality when we choose an image to upload
//  const iconRemove :any = document.querySelectorAll(".RemoveExpnse");
//  listExpenseId.forEach((expenseId,index) => {
//  let indexId=document.querySelector("#uidExpense")
//  indexId?.addEventListener("click", () =>{
//   document.getElementById("#uidExpense")?.remove();
//  });
//  });
//  iconRemove.addEventListener("click", (e) =>{
//  });
//   // 👇️ `30` is 40% of `75`
//   console.log(isWhatPercentOf(30, 75)); // 👉️ 40
//   // 👇️ `20` is 26.666% of `75`
//   console.log(isWhatPercentOf(20, 75));
// const removeAnElement = document.querySelector(
//   ".RemoveIncome "
// ) as HTMLDivElement;
// removeAnElement.addEventListener("click", (e) => {});
