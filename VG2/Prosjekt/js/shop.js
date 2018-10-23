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

    let inpNavn = document.getElementById("navn");
    let inpProduct = document.getElementById("product");
    let inpSize = document.getElementById("size");
    let inpAntall = document.getElementById("antall");

    let btnLagreBestilling = document.getElementById("lagrebestilling");
    btnLagreBestilling.addEventListener("click", lagreBestilling);

    function lagreBestilling(e) {
        let navn = inpNavn.value;
        let product = inpProduct.value;
        let size = inpSize.value;
        let antall = inpAntall.value;
        let ref = database.ref("bestilling/" + navn);
        ref.set({ product, size, antall });
    }


}