function setup() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDPazA3KAe6xXd0Pa2QvNn4y2uwti8700o",
    authDomain: "vikingfk-f166f.firebaseapp.com",
    databaseURL: "https://vikingfk-f166f.firebaseio.com",
    projectId: "vikingfk-f166f",
    storageBucket: "vikingfk-f166f.appspot.com",
    messagingSenderId: "746842846979"
  };
  firebase.initializeApp(config);
  let divListe = document.getElementById("liste");

  let ref = firebase.database().ref("spiller");

  function visSpiller(snapshot) {
    let spiller = snapshot.key;
    let info = snapshot.val();
    divListe.innerHTML += `
            <div>
            <h4>${spiller}</h4>
              <ul>
               <li>Navn: ${info.navn} 
               <li>Nr. ${info.nr}
               <li>Posisjon: ${info.posisjon}
               <li>Alder: ${info.alder}
               <li>Nasjon: ${info.nasjon}
              </ul>
            </div>
          `;
  }
  ref.on("child_added", visSpiller);

}