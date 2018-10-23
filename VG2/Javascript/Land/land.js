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
    let divListe = document.getElementById("liste");
    
    let ref = firebase.database().ref("nations");

    function visLand(snapshot) {
        let navn = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
          <div>
            <h4>${navn}</h4>
            <ul>
             <li>Capital ${info.capital}
             <li>${info.title} ${info.leader}
             <li> Perks
                <ul>
                    <li> Money: ${info.perk.money}
                    <li> Move: ${info.perk.move}
                    <li> War: ${info.perk.war}
                    <li> Science: ${info.perk.science}
                </ul>
                <li>${info.picture}
            </ul>
          </div>
        `;
    }
    ref.on("child_added", visLand);
}