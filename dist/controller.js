logoutButton === null || logoutButton === void 0 ? void 0 : logoutButton.addEventListener('click', function (e) {
    localStorage.removeItem('isLoggedIn');
    location.href = 'login.html';
});
if (!isLoggedInString) {
    location.href = 'login.html';
}
