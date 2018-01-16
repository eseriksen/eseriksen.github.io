// @ts-check

function setup() {
    var config = {
        apiKey: "AIzaSyCvkESFB1YYaT91zPMjRoV3XGuCM86r3oA",
        authDomain: "risk-26b74.firebaseapp.com",
        databaseURL: "https://risk-26b74.firebaseio.com",
        projectId: "risk-26b74",
        storageBucket: "risk-26b74.appspot.com",
        messagingSenderId: "241807662649"
    };
    firebase.initializeApp(config);

    let database = firebase.database();

    let inpLand = document.getElementById("land");
    let inpRegion = document.getElementById("region");

    let btnLagreLand = document.getElementById("lagreland");
    btnLagreLand.addEventListener("click", lagreLand);

    let inpKort = document.getElementById("kort");
    let inpAntallNye = document.getElementById("antallnye");

    let btnLagreKort = document.getElementById("lagrekort");
    btnLagreKort.addEventListener("click", lagreKort);

    function lagreLand(e) {
        let land = inpLand.value;
        let kortid = inpRegion.value;
        let ref = database.ref("land/" + land);
        ref.set({ kortid });
    }

    function lagreKort(e) {
        let kort = inpKort.value;
        let antallnye = inpAntallNye.value;
        let ref = database.ref("kort/" + kort);
        ref.set({ antallnye });
    }

    let inpBruker = document.getElementById("bruker");
    let inpAlder = document.getElementById("alder");
    let inpFarge = document.getElementById("farge");
    let inpNavn = document.getElementById("navn");

    let btnLagreSpiller = document.getElementById("lagrespiller");
    btnLagreSpiller.addEventListener("click", lagreSpiller);

    function lagreSpiller(e) {
        let brukernavn = inpBruker.value;
        let alder = inpAlder.value;
        let farge = inpFarge.value;
        let navn = inpNavn.value;
        let ref = database.ref("spiller/" + brukernavn);
        ref.set({ alder, farge, navn });
    }


}