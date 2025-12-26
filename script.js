function toggleForm(type) {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const forgotForm = document.getElementById('forgotForm');

    // সব আগে লুকিয়ে ফেলি
    loginForm.style.display = "none";
    signupForm.style.display = "none";
    forgotForm.style.display = "none";

    // যেটা দরকার সেটা দেখাই
    if (type === 'signup') {
        signupForm.style.display = "block";
    } else if (type === 'forgot') {
        forgotForm.style.display = "block";
    } else {
        loginForm.style.display = "block";
    }
}