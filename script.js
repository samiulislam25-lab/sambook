function toggleForm() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    }
}

// লগইন ডাটা ধরার জন্য
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const pass = document.getElementById('loginPass').value;
    
    console.log("Login Data:", {email, pass});
    alert("Login Data collected! Check console.");
    // এখানে Firebase কোড বসালে ডাটা আপনার কাছে চলে যাবে
});

// সাইন আপ ডাটা ধরার জন্য
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('newName').value;
    const email = document.getElementById('newEmail').value;
    const pass = document.getElementById('newPass').value;
    
    console.log("Signup Data:", {name, email, pass});
    alert("Signup Data collected!");
});