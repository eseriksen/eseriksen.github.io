// @ts-check
function setup() {
    let outMelding = document.getElementById("melding");
    let divHeader = document.getElementById("header");
    let btnLagre = document.getElementById("lagre");
    let inpNavn = document.getElementById("navn");
    let inpAlder = document.getElementById("alder");
    let inpAdresse = document.getElementById("adresse");
    let inpKlasse = document.getElementById("klasse");
    let inpMobil = document.getElementById("mobil");
    let inpEpost = document.getElementById("epost");
    btnLagre.addEventListener("click", lagreNavn);
    
    function lagreNavn (e) {
        let navn = inpNavn.value;
        let alder = inpAlder.value;
        let adresse = inpAdresse.value;
        let klasse = inpKlasse.value;
        let mobil = inpMobil.value;
        let epost = inpEpost.value;
        outMelding.innerHTML = `Du heter ${navn} 
        og er ${alder} år. Du bor på ${adresse}, og har mobil ${mobil} 
        og epost ${epost}.
        
        `;
        //alert("Du heter "+ navn + " og er " + alder + " år.");
    }
    //divHeader.innerHTML = "Hei,";
}