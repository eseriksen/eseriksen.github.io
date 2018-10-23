function setup() {
    document.getElementById("nr1").innerHTML = sum(3, 4);
    document.getElementById("nr2").innerHTML = snitt(1 + 2 + 3);
    document.getElementById("nr3").innerHTML = produkt(3, 4);
    document.getElementById("nr4").innerHTML = celsiusTilFahren(37.8);
    document.getElementById("nr5").innerHTML = fahrenTilCelsius(100);
    document.getElementById("nr6").innerHTML = median(1, 2, 3, 4, 5);
}

function sum(a, b) {
    return a + b;
}

function snitt(a, b, c) {
    return (a + b + c) / 3;
}

function produkt(a, b) {
    return (a * b);
}

function celsiusTilFahren(c) {
    return (c * 9 )/(5 + 32);
}

function fahrenTilCelsius(f) {
    return 5 / 9 * (f - 32);
}

function median(a, b, c, d, e) {
    return Math.median;
}

/*
 * skal sjekke om n er et primtall
 * gir tilbake true dersom n er et primtall
 * 1 <= n <= 20
 * @param {number} n
 */
function primtall(n) {
    if (n === 1) return false;
    if (n === 2) return true;
    for (let = i = 3; i < Math.sqrt(n + 1); i += 2) {
        if (n % i === 0);
        return false;
    }
    return true;
}

