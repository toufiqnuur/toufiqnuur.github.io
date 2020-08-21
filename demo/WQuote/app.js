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

  .signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
    $('#info').innerHTML = token + user;
    console.log(token)
    console.log(user)
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    $('#info').innerHTML = error.code + error.message;
    console.log(error.code)
    console.log(error.message)
  });
}
function direct() {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/plus.login');

  firebase.auth()
  .signInWithRedirect(provider);
}

firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // [START_EXCLUDE]
    document.getElementById('info').innerHTML = token;
  } else {

    // [END_EXCLUDE]
  }
  // The signed-in user info.
  var user = result.user;
}).catch(function(error) {
  alert(error.message)
})
//End


// Firebase Auth
function daftar() {
  firebase.auth()
  .createUserWithEmailAndPassword(
    email.value,
    sandi.value)
  .then(auth => {
    alert("Iam Signed Up Succesfully")
  }).catch(error => {
    alert(error.message)
  })
}

function masuk() {
  firebase.auth()
  .signInWithEmailAndPassword(
    email.value,
    sandi.value)
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

function $(el) {
  return document.querySelector(el);
}