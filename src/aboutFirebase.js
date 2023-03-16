import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc, 
  deleteDoc,
  doc,
} from "firebase/firestore";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

import {} from "./main";
 import {} from "./admin";
import {} from "./about";

const firebaseConfig = {
  apiKey: "AIzaSyDoC94Xlt0BHfsH_zLp8562xsKMW49mv8s",
  authDomain: "job-meister.firebaseapp.com",
  projectId: "job-meister",
  storageBucket: "job-meister.appspot.com",
  messagingSenderId: "51579629977",
  appId: "1:51579629977:web:eae8590655f4e102e2e308",
  measurementId: "G-W33GWTB6JB",
};

// init firebase
const app = initializeApp(firebaseConfig);

// init services
const db = getFirestore(app);
const auth = getAuth();
// collection ref

const colRef = collection(db, "Data");
const docAllusers = collection(db, "users");
const nav1= document.getElementById('nav1');
const nav2= document.getElementById('nav2');
const nav3= document.getElementById('nav3');
var oldData;
let logEmail;
let allUsers = [];
let usernumber, useremail, userfirstname, userlastname;
getDocs(docAllusers).then((snapshot) => {
  snapshot.docs.forEach((doc) => {
    allUsers.push({ ...doc.data(), id: doc.id });
  });
  let userq = allUsers.length;
  console.log(allUsers);

  for (let index = 0; index < userq; index++) {
    if (allUsers[index].email == logEmail) {
      useremail = allUsers[index].email;
    }
  }
});

onAuthStateChanged(auth, (user) => {
  console.log("User status changed", user);
  if (user != null) {
    logEmail = user.email;
    console.log(logEmail);
    getDocs(docAllusers).then((snapshot) => {
      let allUsers = []
      snapshot.docs.forEach((doc)=>{
        allUsers.push({...doc.data(), id:doc.id })
      })
      let userq=allUsers.length;
      console.log(allUsers);
      for (let index = 0; index < userq; index++) {
        if(allUsers[index].email==logEmail) {
            if(allUsers[index].eOrS=="Employer") {
                nav1.style.display='none';
                nav2.style.display = 'block';
                nav3.style.display = 'none';
                break;
            }
            else {
                nav1.style.display='none';
                nav2.style.display = 'none';
                nav3.style.display = 'block';
                break;
            }
          }
        }
       }) 
  } 
  else {
    nav1.style.display='block';
    nav2.style.display = 'none';
    nav3.style.display = 'none';
  }
});

const logoutButton = document.querySelector(".logoutBtn");
logoutButton.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      alert("signout");
      location.href = "index.html";
    })
    .catch((err) => {
      console.log(err.message);
    });
});
const logoutButton2 = document.querySelector(".logoutBtn2");
logoutButton2.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      alert("signout");
      location.href = "index.html";
    })
    .catch((err) => {
      console.log(err.message);
    });
});

// get collection data
getDocs(colRef)
  .then((snapshot) => {
    let Data = [];
    snapshot.docs.forEach((doc) => {
      Data.push({ ...doc.data(), id: doc.id });
    });
    console.log(Data);
    $("#RealAbout").html(Data[0].dataAbout);
  })
  .catch((err) => {
    console.log(err.message);
  });