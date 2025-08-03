// Firebase v12 Modular Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDzYQHvr6a2M7lIV1Xqc2DrsZ7qYRNMibA",
  authDomain: "typingworld-c5376.firebaseapp.com",
  projectId: "typingworld-c5376",
  storageBucket: "typingworld-c5376.appspot.com", // 🔧 fixed typo (was .app)
  messagingSenderId: "1012172332773",
  appId: "1:1012172332773:web:f07fc1ee742b4387bdfe0c",
  measurementId: "G-E9CQVF4BSX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const googleBtn = document.getElementById("google-login");
  const fbBtn = document.getElementById("facebook-login");

  // ✅ Google Login
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
          } else {
            alert("Google Login Error: " + error.message);
          }
        });
    });
  }

  // ✅ Facebook Login (using Facebook SDK)
  if (fbBtn) {
    fbBtn.addEventListener("click", () => {
      FB.login((response) => {
        if (response.authResponse) {
          FB.api('/me', { fields: 'name,email' }, (userData) => {
            alert(`Welcome, ${userData.name} (Facebook)!`);
          });
        } else {
          alert("Facebook Login failed or cancelled.");
        }
      }, { scope: 'email' });
    });
  }
});
