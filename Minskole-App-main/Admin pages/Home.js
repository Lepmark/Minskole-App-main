

    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
    import { getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
    import { getFirestore, getDoc, doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyDsSv_axhBRQEBq8ZEoe-anHBuTncNRTB8",
        authDomain: "loginform-958a4.firebaseapp.com",
        databaseURL: "https://loginform-958a4-default-rtdb.firebaseio.com",
        projectId: "loginform-958a4",
        storageBucket: "loginform-958a4.appspot.com",
        messagingSenderId: "1043085667540",
        appId: "1:1043085667540:web:6698a1f440697f78d65f41"
      };
    
      // .......................Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const auth = getAuth();    
      const db = getFirestore();

      onAuthStateChanged(auth, (user)=>{
        const loggedInUser = localStorage.getItem('loggedInUserId');
        if (loggedInUser){
            const docRef = doc(db, "users", loggedInUser);
            getDoc(docRef)
            .then((docSnap)=>{
                if (docSnap.exists()){
                    const userData = docSnap.data();
                    document.getElementById("loggedInUserFName").innerText = userData.FirstName;
                    document.getElementById("loggedInUserLName").innerText = userData.LastName;
                    document.getElementById("loggedInUserEmail").innerText = userData.Email;       
                }    
                else{
                    console.log("No document found matching with Id");
                }     
            })
            .catch((error)=>{
                console.log("Error getting Document");
            })
        }
        else{
            console.log("User Id not found in Local Storage");
        }

      })
