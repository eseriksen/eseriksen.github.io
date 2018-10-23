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
    function makeSnø() {
        for (let i = 0; i < 250; i++) {
            let snø = document.createElement('div');
            snø.className = "snø";
            snø.style.left = Math.random() * 600 + "vw";
            snø.style.animationDelay = Math.random() * 5000 + "ms";
            let radious = Math.random() * 5 + 1;
            snø.style.width = (Math.random() * 5 + 1) + "px";
            snø.style.height = (Math.random() * 5 + 1) + "px";
            divHimmel.appendChild(snø);
        }
    }
    makeSnø();

    function kanonSnø() {
        for (let i = 0; i < 50; i++) {
            let snø = document.createElement('div');
            snø.className = "powder";
            snø.style.animationDelay = Math.random() * 5000 + "ms";
            let radious = Math.random() * 5 + 1;
            snø.style.width = (Math.random() * 5 + 1) + "px";
            snø.style.height = (Math.random() * 5 + 1) + "px";
            divHimmel.appendChild(snø);
        }
    }
    kanonSnø();
}