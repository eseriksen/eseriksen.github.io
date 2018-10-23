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

    let land = database.ref("land");
    land.on("child_added", visLand)

    let kort = database.ref("kort");
    kort.on("child_added", visKort)

    let spiller = database.ref("spiller");
    spiller.on("child_added", visSpiller)

    function visLand(snapshot) {
        let land = snapshot.key;
        let divMain = document.getElementById("land");
        divMain.innerHTML += `<div class="box">${land}</div>`
    }

    function visKort(snapshot) {
        let kort = snapshot.key;
        let divMain = document.getElementById("kort");
        divMain.innerHTML += `<div class="box">${kort}</div>`
    }

    function visSpiller(snapshot) {
        let spiller = snapshot.val();
        let divMain = document.getElementById("spiller");
        divMain.innerHTML +=
        `<div class="box">
        <br>Navn ${spiller.navn}
        <br>Farge ${spiller.farge}
        <br>Alder ${spiller.alder}
        ${spiller}
        </div>`
    }
}