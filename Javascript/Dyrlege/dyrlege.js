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

  let ref = firebase.database().ref("kunde");

  function visKunde(snapshot) {
    let kundenr = snapshot.key;
    let info = snapshot.val();
    divListe.innerHTML += `
          <div>
          <h4>Kundenr: ${kundenr}</h4>
            <ul>
             <li>Navn: ${info.fornavn} ${info.etternavn}
             <li>Mobilnr: ${info.mobil}
             <li>Epost: ${info.epost}
            </ul>
          </div>
        `;
  }
  ref.on("child_added", visKunde);

    /*
    function visDyr(snapshot) {
      let dnr = snapshot.key;
      let info = snapshot.val();
      divListe.innerHTML += `
          <div>
          <h4>Dyrnr: ${dnr}</h4>
            <ul>
             <li>Art: ${info.art}
             <li>Fødselsdato: ${info.fdato}
             <li>Kjønn: ${info.kjønn}
             <li>Kundenr: ${info.kundenr}
             <li>Vekt: ${info.vekt}
            </ul>
          </div>
        `;
    }
    ref.on("child_added", visDyr);
}