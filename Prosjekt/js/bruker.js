// @ts-check

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

    let database = firebase.database();

    let inpBruker = document.getElementById("bruker");
    let inpAlder = document.getElementById("alder");
    let inpEpost = document.getElementById("epost");

    let btnLagreBruker = document.getElementById("lagrebruker");
    btnLagreBruker.addEventListener("click", lagreBruker);

    function lagreBruker(e) {
        let brukernavn = inpBruker.value;
        let alder = inpAlder.value;
        let epost = inpEpost.value;
        let ref = database.ref("bruker/" + brukernavn);
        ref.set({ alder, epost });
    }
}