"use strict";
var dias;
(function (dias) {
    dias[dias["domingo"] = 0] = "domingo";
    dias[dias["segunda"] = 1] = "segunda";
    dias[dias["terca"] = 2] = "terca";
    dias[dias["quarta"] = 3] = "quarta";
    dias[dias["quinta"] = 4] = "quinta";
    dias[dias["sexta"] = 5] = "sexta";
    dias[dias["sabado"] = 6] = "sabado";
})(dias || (dias = {}));
// console.log(dias.domingo);
// console.log(dias["domingo"]);
// console.log(dias[1]);
// const d = new Date()
// console.log(d.getDate())
// console.log(dias[d.getDay()])
var cores;
(function (cores) {
    cores["branco"] = "#fff";
    cores["preto"] = "#000";
    cores["vermelho"] = "#f00";
    cores["verde"] = "#0f0";
    cores["azul"] = "#00f";
})(cores || (cores = {}));
console.log(cores.branco);
console.log(cores["branco"]);
var tiposusuarios;
(function (tiposusuarios) {
    tiposusuarios[tiposusuarios["USER"] = 10] = "USER";
    tiposusuarios[tiposusuarios["ADMIN"] = 100] = "ADMIN";
    tiposusuarios[tiposusuarios["SUPER"] = 1000] = "SUPER";
})(tiposusuarios || (tiposusuarios = {}));
console.log(tiposusuarios.ADMIN);
const tp = tiposusuarios.ADMIN;
console.log(tp);
