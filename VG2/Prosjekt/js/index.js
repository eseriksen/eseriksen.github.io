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

    let inpFind = document.getElementById("find"); // kobling til søkefeltet
    inpFind.addEventListener("keydown", finnOrd);
    let divResultat = document.getElementById("resultat"); // kobling til div#resultat

    function finnOrd(e) {
        if (e.keyCode === 13) { // bruker trykket return
            let valgt = inpFind.value;
            let ref = firebase.database().ref("Spiller").orderByChild("navn").equalTo(valgt);
            ref.once("value").then(function (snapshot) {
                let funnet = snapshot.val();
                if (funnet) {
                    // vi fant noe som matcher
                    let htm = Object.entries(funnet).map(([k, v]) => {
                        let felt = Object.entries(v).map(([k, v]) =>
                            `<li>${k} : ${v}</li>`
                        );
                        return `${k} <ul>${felt.join('')}</ul>`;
                    });
                    divResultat.innerHTML = htm;
                } else {
                    divResultat.innerHTML = "Ingen treff (sjekk stor/liten bokstav)";
                }
            });
        }
    }
}