function setup2() {

  var config = {
    apiKey: "AIzaSyDPazA3KAe6xXd0Pa2QvNn4y2uwti8700o",
    authDomain: "vikingfk-f166f.firebaseapp.com",
    databaseURL: "https://vikingfk-f166f.firebaseio.com",
    projectId: "vikingfk-f166f",
    storageBucket: "vikingfk-f166f.appspot.com",
    messagingSenderId: "746842846979"
  };
  firebase.initializeApp(config);
  initApp();
}

function toggleSignIn() {
  if (firebase.auth().currentUser) {
    firebase.auth().signOut();
  } else {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    }
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      document.getElementById('sign-in').disabled = false;
    });
  }
  document.getElementById('sign-in').disabled = true;
}

function handleSignUp() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  if (email.length < 4) {
    alert('Please enter an email address.');
    return;
  }
  if (password.length < 4) {
    alert('Please enter a password.');
    return;
  }

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
  });
}

/**
 * initApp handles setting up UI event listeners and registering Firebase auth listeners:
 *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
 *    out, and that is where we update the UI.
 */
function initApp() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      document.getElementById('login').classList.add("hidden");
      document.getElementById('status').classList.remove("hidden");
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;

      document.getElementById('signout').addEventListener('click', toggleSignIn, false);



    } else {
      // bruker må logge inn eller registrere seg
      document.getElementById('login').classList.remove("hidden");
      document.getElementById('sign-in').textContent = 'Logg inn';
      document.querySelector('#status').classList.add("hidden");
    }

    document.getElementById('sign-in').disabled = false;
  });

  document.getElementById('sign-in').addEventListener('click', toggleSignIn, false);
  document.getElementById('sign-up').addEventListener('click', handleSignUp, false);
}