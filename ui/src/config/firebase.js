// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZWGpyPZSv3_un-Xf2X6WAIpzdWWWRLo0",
    authDomain: "medvitals-786db.firebaseapp.com",
    projectId: "medvitals-786db",
    storageBucket: "medvitals-786db.firebasestorage.app",
    messagingSenderId: "1099312819142",
    appId: "1:1099312819142:web:be1bf91d270bfda726e0c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const signInWithGoogle = function () {
    const googleAuthProvider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, googleAuthProvider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user);
            return user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            return null;
        });
};