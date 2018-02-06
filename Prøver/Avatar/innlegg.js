function setup() {
    var config = {
        apiKey: "AIzaSyAPgrGdZiKZp7w2WkVc6xrAEFkx6f5DtT0",
        authDomain: "avatar-9d89d.firebaseapp.com",
        databaseURL: "https://avatar-9d89d.firebaseio.com",
        projectId: "avatar-9d89d",
        storageBucket: "avatar-9d89d.appspot.com",
        messagingSenderId: "299290641218"
    };
    firebase.initializeApp(config);
    let divListe = document.getElementById("liste");
    let ref = firebase.database().ref("Innlegg");

    function visInnlegg(snapshot) {
        let innlegg = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
          <div>
            <h4> Forum nr: ${info.forumnr}</h4>
            <ul>
            <li>${innlegg}: ${info.melding}
            </ul>
          </div>
        `;
    }
    ref.on("child_added", visInnlegg);
}