
var firebaseConfig = {
    apiKey: "AIzaSyCXvNs10zD7uwGxJAU8rglhNzdyfE6MtVs",
    authDomain: "kwitter-2dba0.firebaseapp.com",
    databaseURL: "https://kwitter-2dba0-default-rtdb.firebaseio.com",
    projectId: "kwitter-2dba0",
    storageBucket: "kwitter-2dba0.appspot.com",
    messagingSenderId: "963778082770",
    appId: "1:963778082770:web:8f9b3f2533acce1553fa0b",
    measurementId: "G-0GMCSG7VSS"
    };
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}