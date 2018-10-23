// @ts-check

let deltakere = [];
class Deltaker {
    constructor(navn, alder, kjonn, loype) {
        this.navn = navn;
        this.alder = alder;
        this.kjonn = kjonn;
        this.loype = loype;
    }
}

function setup() {
    let inpNavn = document.getElementById("navn");
    let inpAlder = document.getElementById("alder");
    let selKjonn = document.getElementById("kjonn")
    let selLoype = document.getElementById("loype");
    let outMelding = document.getElementById("melding");
    let btnRegistrer = document.getElementById("registrer");

    btnRegistrer.addEventListener("click", registrerDeltaker)

    function registrerDeltaker() {
        let navn = inpNavn.value;
        let alder = inpAlder.valueAsNumber;
        let kjonn = selKjonn.value;
        let loype = selLoype.value;
        let d = new Deltaker(navn, alder, kjonn, loype);
        deltakere.push(d);
        outMelding.innerHTML = `Du, ${navn}, er nå registrert.
        `;
    }
}