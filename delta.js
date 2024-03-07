
//    function pokazTekst() {
//      var tekst = document.getElementById("poleTekstowe").value;
//        alert("Wprowadzony tekst: " + tekst);
//    }

var X1 = Math.floor(Math.random() * 11 + 1);
var X2 = Math.floor(Math.random() * 11 + 1);
X1 = X1 - 6;
X2 = X2 - 6;
var zmienna_a = 1;
var zmienna_b = X1 + X2;
var zmienna_c = X1 * X2;
var odpowiedz;
var zmienna_delta = zmienna_b * zmienna_b - 4 * zmienna_a * zmienna_c;
//var tekst = "X^2" + zmienna_b + "X" + zmienna_c;


alert("X1 " + X1 + " X2 " + X2 + "|" + zmienna_a + "|" + zmienna_b + "|" + zmienna_c + "|");
function pokazRownanie() {
    var t1 = "";
    var t2 = "";
    if (zmienna_b > 0) { t1 = "X^2+" + zmienna_b + "X"; }
    else if (zmienna_b === 0) { t1 = "X^2"; }
    else { t1 = "X^2" + zmienna_b + "X"; }

    if (zmienna_c > 0) { t2 = "+" + zmienna_c; }
    else if (zmienna_c === 0) { t2 = ""; }
    else { t2 = "" + zmienna_c; }

    //var tekst = "X^2" + zmienna_b + "X" + zmienna_c;
    var tekst = t1 + "" + t2 + "";
    return ("Równanie to  : " + tekst);
}

function sprawdz() {
    var odpowiedz = document.getElementById("poleTekstowe").value;
    if (odpowiedz == zmienna_delta) {
        alert("Gratulacje");
    }
    else {
        alert("spierdoliłeś byk");
    }
}
var rownanie_div = document.getElementById("rownanie");
rownanie_div.innerText = pokazRownanie();
