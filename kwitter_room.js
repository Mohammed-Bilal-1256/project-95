//ADD YOUR FIREBASE LINKS HERE
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

    user_name = localStorage.getItem("Username");
    document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";

          firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout(){
      window.location = "index.html";
}
