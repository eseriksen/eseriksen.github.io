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
    Firebase.initializeApp(config);
    let divListe = document.getElementById("liste");
    let ref = database().ref("nations");

    function visLand(snapshot) {
        let land = snapshot.val();
        divListe.innerHTML += `
        <div>$(land.capital)</div>
        `;
    }
    
    ref.on("child_added", visLand);

}