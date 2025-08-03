// Firebase v12 Modular Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// 🔐 Firebase Config (with your new API key)
const firebaseConfig = {
  apiKey: "AIzaSyCV3K6GST5-2Owc8WQlbP0ADbUwve0WZFo", // ✅ New key here
  authDomain: "typingworld-c5376.firebaseapp.com",
  projectId: "typingworld-c5376",
  storageBucket: "typingworld-c5376.appspot.com",
  messagingSenderId: "1012172332773",
  appId: "1:1012172332773:web:f07fc1ee742b4387bdfe0c",
  measurementId: "G-E9CQVF4BSX"
};

// 🔧 Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Google Login
const googleBtn = document.getElementById("google-login");
if (googleBtn) {
  googleBtn.addEventListener("click", () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        alert(`Welcome, ${user.displayName} (Google)!`);
      })
      .catch((error) => {
        if (error.code === 'auth/popup-blocked') {
          signInWithRedirect(auth, provider);
        }
