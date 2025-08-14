import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9ysUtIAMrZSLGgvHNYwBV6lScmm1scOE",
  authDomain: "qckr-fe064.firebaseapp.com",
  projectId: "qckr-fe064",
  storageBucket: "qckr-fe064.firebasestorage.app",
  messagingSenderId: "554766233868",
  appId: "1:554766233868:web:6cfb8c741b8ddd44179929",
  measurementId: "G-ZG28PBS4JB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
