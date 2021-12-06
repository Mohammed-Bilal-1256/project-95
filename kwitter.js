
const firebaseConfig = {
    apiKey: "AIzaSyBWmavdkOeSn-_AuHMsANJEXGTiOI8ME9o",
    authDomain: "kwitter-ddd1a.firebaseapp.com",
    databaseURL: "https://kwitter-ddd1a-default-rtdb.firebaseio.com/",
    projectId: "kwitter-ddd1a",
    storageBucket: "kwitter-ddd1a.appspot.com",
    messagingSenderId: "43505810456",
    appId: "1:43505810456:web:25f2fa9c5a98dc7bb8976d",
    measurementId: "G-F47SK2L2R6"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);



function addUser(){
user_name = document.getElementById("user_name").value;

localStorage.setItem("user_name", user_name);

window.location = "kwitter_room.html";
}