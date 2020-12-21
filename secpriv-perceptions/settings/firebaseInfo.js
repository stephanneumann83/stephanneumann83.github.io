// Initialize Firebase
var config = {
  apiKey: "AIzaSyAhzHjQLgvyAuodHMM97lgcCjE_cJZCj1U",
  authDomain: "security-perceptions.firebaseapp.com",
  databaseURL: "https://security-perceptions-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "security-perceptions",
  storageBucket: "security-perceptions.appspot.com",
  messagingSenderId: "1053287696702",
  appId: "1:1053287696702:web:4cca82f9ceda3f1c5a046f"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  var rootRef = firebase.database().ref();