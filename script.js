import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyAL3NGHFIDXyOGpuYRwgTOOw-iIubf6KgE",
    authDomain: "daanoymichael.firebaseapp.com",
    databaseURL: "https://daanoymichael-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "daanoymichael",
    storageBucket: "daanoymichael.appspot.com",
    messagingSenderId: "167008676312",
    appId: "1:167008676312:web:4a44cb5ab117c522ddaaad",
    measurementId: "G-B8G3DNFPHY"
};

document.getElementById("submit_button").addEventListener("click", function() {
    console.log("User has submitted");
})

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const userFirst = document.getElementById('first_name').value;
    const userLast = document.getElementById('last_name').value;
    const userEmail = document.getElementById('email').value;
    const contactNumber = document.getElementById('contact_number').value;

    try {
        // Generate a new document in Firestore with a unique ID
        const docRef = doc(db, "submissions", userEmail); // Use userEmail or another unique field as the document ID

        // Store user data in Firestore
        await setDoc(docRef, {
            userFirst: userFirst,
            userLast: userLast,
            userEmail: userEmail,
            contactNumber: contactNumber,
        });

        console.log("Form submitted successfully:", userEmail);
        alert("Thank you for your submission!");

        // Optionally redirect to another page
        // window.location.assign("./index.html");

    } catch (error) {
        console.error("Error submitting form:", error);
        alert("There was an error with your submission. Please try again.");
    }
});
