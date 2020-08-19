// Firebase Config
var firebaseConfig = {
  apiKey: "AIzaSyCpg473wsKXvoE-CYE0oWQY2jNvwVbE6Ek",
  authDomain: "toufiq-personal.firebaseapp.com",
  databaseURL: "https://toufiq-personal.firebaseio.com",
  projectId: "toufiq-personal",
  storageBucket: "toufiq-personal.appspot.com",
  messagingSenderId: "715479742908",
  appId: "1:715479742908:web:e493234506c92835d7d3b9"
};


// Firebase Initialize
firebase.initializeApp(firebaseConfig);

// DOM Elements
const email = document.getElementById('email'),
sandi = document.getElementById('password')


// Google Popup Auth
function pop() {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

  firebase.auth()
  .signInWithPopup(provider)
  .then(function(result) {
    var token = result.cradential.accessToken;
    var user = result.user;
    document.getElementById('info').innerHTML = user + token;
  }).catch(function(error) {
    alert(error.message)
  })
}
//End


// Firebase Auth
function daftar() {
  firebase.auth()
  .createUserWithEmailAndPassword(
    email.value, sandi.value)
  .then(auth => {
    alert("Iam Signed Up Succesfully")
  }).catch(error => {
    alert(error.message)
  })
}

function masuk() {
  firebase.auth()
  .signInWithEmailAndPassword(
    email.value, sandi.value)
  .then(auth => {
    alert("Iam Signed In Succesfully")
  }).catch(error => {
    alert(error.message)
  })
}

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    var displayName = user.displayName;
    var email = user.email;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    document.getElementById('info').innerHTML = displayName + email + photoURL + isAnonymous + uid + providerData;
  }
})