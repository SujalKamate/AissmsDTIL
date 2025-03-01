// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-analytics.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDU26CB95l8Ev7K_BQIqEQRRQoZfKUCeOI",
  authDomain: "edutech-11f31.firebaseapp.com",
  projectId: "edutech-11f31",
  storageBucket: "edutech-11f31.firebasestorage.app",
  messagingSenderId: "129996183887",
  appId: "1:129996183887:web:1bfcfca59e1a48f8734d3a",
  measurementId: "G-P7MTB3MTWG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Firebase Authentication

// Google Login Function
document.getElementById("loginBtn").addEventListener("click", function () {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            console.log("User Info:", result.user);
            alert(`Welcome ${result.user.displayName}`);
            window.location.href = "index.html"; // Redirect after login
        })
        .catch((error) => {
            console.error("Login Error:", error);
        });
});

// Google Signup Function
document.getElementById("signupBtn").addEventListener("click", function () {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            console.log("User Info:", result.user);
            alert(`Account created successfully! Welcome ${result.user.displayName}`);
            window.location.href = "index.html"; // Redirect after signup
        })
        .catch((error) => {
            console.error("Signup Error:", error);
        });
});

// Handle credential response from Google Sign-In
window.handleCredentialResponse = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log("User Info:", result.user);
            alert(`Welcome ${result.user.displayName}`);
            window.location.href = "main.html"; // Redirect to main page
        })
        .catch((error) => {
            console.error("Error during sign-in:", error);
            alert('Error during sign-in: ' + error.message);
        });
};
