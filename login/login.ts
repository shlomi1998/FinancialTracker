const allUsersString = localStorage.getItem('allUsers');

if (!allUsersString){
    const emptyArray:Array<User> = [];
    localStorage.setItem('allUsers',JSON.stringify(emptyArray))
}

const isLoggedInString = localStorage.getItem('isLoggedIn');
if(isLoggedInString){
    const isLoggedIn = JSON.parse(isLoggedInString);
    if (isLoggedIn.isLoggedIn == true){
        location.href = 'HomePage.html'
    }
}

function loginHandler(e){
    e.preventDefault();
    const allUsersString = localStorage.getItem('allUsers');
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    const passwordInput = document.querySelector("#password");
    const popMessage = document.querySelector('#loginPopMessage');
    localStorage.setItem('isLoggedIn','false');


    if(allUsersString){
        const allUsersArray = JSON.parse(allUsersString);
        let foundUser = false;
        if (username && password){
            allUsersArray.forEach(user => {
                if (user.username.toLowerCase() === username.toLowerCase() && user.password === password){
                    console.log("okay")
                    foundUser = true;
                    const isLoggedInString = `{"isLoggedIn":true,"username":"${user.username}"}`
                    localStorage.setItem('isLoggedIn',isLoggedInString)
                    location.href = 'HomePage.html'
                }
            });
            if (!foundUser){
                if (passwordInput && !popMessage) {
                    passwordInput.insertAdjacentHTML(
                        "afterend",
                        "<span id='loginPopMessage'>Username don't exists or wrong password!</span>"
                    );
                }
            }
        }
    }
}