function setup() {

    var config = {
        apiKey: "AIzaSyDPazA3KAe6xXd0Pa2QvNn4y2uwti8700o",
        authDomain: "vikingfk-f166f.firebaseapp.com",
        databaseURL: "https://vikingfk-f166f.firebaseio.com",
        projectId: "vikingfk-f166f",
        storageBucket: "vikingfk-f166f.appspot.com",
        messagingSenderId: "746842846979"
    };
    firebase.initializeApp(config);


    let btnLogin = document.getElementById("login");
    btnLogin.addEventListener("click", login);

    function login() {
        window.location.href = "login.html";
    }

    if (firebase.auth().currentUser) {
        // bruker er logga inn
        let liPrivat = document.getElementById("privat");
        liPrivat.innerHTML = '<a href="privat.html>privat</a>';
    }
}