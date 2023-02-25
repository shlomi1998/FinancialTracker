var allUsersString = localStorage.getItem('allUsers');
if (!allUsersString) {
    var emptyArray = [];
    localStorage.setItem('allUsers', JSON.stringify(emptyArray));
}
var isLoggedInString = localStorage.getItem('isLoggedIn');
if (isLoggedInString) {
    var isLoggedIn = JSON.parse(isLoggedInString);
    if (isLoggedIn.isLoggedIn == true) {
        location.href = 'HomePage.html';
    }
}
function loginHandler(e) {
    e.preventDefault();
    var allUsersString = localStorage.getItem('allUsers');
    var username = e.target.elements.username.value;
    var password = e.target.elements.password.value;
    var passwordInput = document.querySelector("#password");
    var popMessage = document.querySelector('#loginPopMessage');
    localStorage.setItem('isLoggedIn', 'false');
    if (allUsersString) {
        var allUsersArray = JSON.parse(allUsersString);
        var foundUser_1 = false;
        if (username && password) {
            allUsersArray.forEach(function (user) {
                if (user.username.toLowerCase() === username.toLowerCase() && user.password === password) {
                    console.log("okay");
                    foundUser_1 = true;
                    var isLoggedInString_1 = "{\"isLoggedIn\":true,\"username\":\"" + user.username + "\"}";
                    localStorage.setItem('isLoggedIn', isLoggedInString_1);
                    location.href = 'HomePage.html';
                }
            });
            if (!foundUser_1) {
                if (passwordInput && !popMessage) {
                    passwordInput.insertAdjacentHTML("afterend", "<span id='loginPopMessage'>Username don't exists or wrong password!</span>");
                }
            }
        }
    }
}
