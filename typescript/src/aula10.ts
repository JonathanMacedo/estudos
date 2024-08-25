// NULL - UNDEFINED - UNKNOWN

//NULL - tipo nulo
//UNDEFINED - indefinido
//UNKNOWN - desconhecido

let vnome: string | null;
vnome = "Jonathan";
console.log(vnome);

let vnome2;
console.log(vnome2);

let vnome3: unknown = vnome; // UNKNOWN só pode ser atribuído em tipos UNKNOWN ou ANY
let vnum: any = vnome3;
console.log(vnome3);
