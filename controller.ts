
logoutButton?.addEventListener('click', e => {
    localStorage.removeItem('isLoggedIn')
    location.href = 'login.html'
})

if (!isLoggedInString){
    location.href = 'login.html'
}
