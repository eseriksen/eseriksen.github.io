// @ts-check

class Bestilling {
    constructor(voksne, barn, forestilling) {
        this.voksne = voksne;
        this.barn = barn;
        this.forestilling = forestilling;
    }
}


function setup() {

    let bestillingsListe = [];

    let inpVoksne = document.getElementById("voksne");
    let inpBarn = document.getElementById("barn");
    let selForestilling = document.getElementById("forestilling");
    let btnLagre = document.getElementById("lagre");
    let divOversikt = document.getElementById("oversikt");

    btnLagre.addEventListener("click", lagreData);

    function lagreData() {
        let voksne = inpVoksne.value;
        let barn = inpBarn.value;
        let forestilling = selForestilling.value;

        if (+voksne + +barn > 0 && barn >= 0 && voksne >= 0 && forestilling !== "") {
            document.getElementById("reg").classList.add("godkjent");
        } else {
            alert("Du må fylle ut med gyldige verdier.");
            document.getElementById("reg").classList.add("godkjent");
            return;
        }

        let totalsum = +voksne * 316 + +barn * 120;
        let sum = totalsum;
        if (totalsum > 600) {
            totalsum *= 0.8; //gir 20% rabatt.
        }


        let bestilling = new Bestilling(voksne, barn, forestilling);
        bestillingsListe.push(bestilling);
        visListe();
    }

    function visListe() {
        let innhold = "";  //"<ul>";
        for (let b of bestillingsListe) {
            innhold += `<li>Voksne: ${b.voksne} Barn:${b.barn} Forestilling:${b.forestilling}</li>`;
        }
        //innhold += "</ul>";
        divOversikt.innerHTML = innhold;
    }
}