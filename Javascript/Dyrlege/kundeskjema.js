function setup() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyB2hNFIBTEM_rxZ1oFYHxT2EdIUrGfBVXY",
        authDomain: "project-lime1.firebaseapp.com",
        databaseURL: "https://project-lime1.firebaseio.com",
        projectId: "project-lime1",
        storageBucket: "project-lime1.appspot.com",
        messagingSenderId: "501929299812"
    };

    firebase.initializeApp(config);
    let spanKunde = document.getElementById("kundevelger");
    let divDyr = document.getElementById("dyr");

    let ref = firebase.database().ref("kunde");

    ref.once("value").then(function (snapshot) {
        let kundene = snapshot.val();
        if (kundene) {
            let dropBox = makeDrop(kundene);
            spanKunde.innerHTML = dropBox;
        }
    });

    function makeDrop(kunder) {
        let box = '<select id="kundenr">';
        let kundenr = Object.keys(kunder);
        let navn = kundenr.map(e =>
            `<option values="${e}">${kunder[e].fornavn}</option>`);
        box += navn.join("") + "</select>";
        return box;
    }

}