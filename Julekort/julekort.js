function setup() {
    let divHimmel = document.getElementById("himmel");
    let divJulenissen = document.getElementById("Julenissen");
    let stjerne = divHimmel.querySelectorAll(".stjerne");
    stjerne.forEach(stjerner => {
        stjerner.style.left = -120 + Math.floor(Math.random() * 240) + "px";
        stjerner.style.top = -80 + Math.floor(Math.random() * 160) + "px";
    });

    divJulenissen.addEventListener("click", dropGifts);

    function dropGifts(e) {
        let pakke = document.createElement('div');
        pakke.className = "pakke";
        pakke.style.left = e.screenX + "px";
        pakke.style.top = (e.screenY - 50) + "px";
        divHimmel.appendChild(pakke);
    }
}