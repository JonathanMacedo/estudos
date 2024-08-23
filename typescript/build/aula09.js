"use strict";
function contador(res) {
    let soma = res;
    while (soma >= 0 && soma < 10) {
        soma++;
        console.log(soma);
    }
}
contador(0);
