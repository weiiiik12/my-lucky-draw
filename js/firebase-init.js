// js/firebase-init.js
// 這是你的專屬鑰匙，已植入 Hago 系統
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyA84BEQc_szhvmbVlxVR_mXnCQ0E4auqTg",
    authDomain: "hago-award-system.firebaseapp.com",
    projectId: "hago-award-system",
    storageBucket: "hago-award-system.firebasestorage.app",
    messagingSenderId: "959940017225",
    appId: "1:959940017225:web:85a36866320f53638f5398",
    measurementId: "G-HRS8GBGJ89"
};

let app, auth, db, analytics;
let initError = null;

try {
    app = initializeApp(firebaseConfig);
    // analytics = getAnalytics(app); // 先註解掉分析功能，避免錯誤
    auth = getAuth(app);
    db = getFirestore(app);
} catch (e) {
    console.error("Firebase Init Error:", e);
    initError = e;
}

export { app, auth, db, analytics, initError };