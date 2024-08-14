// function testec1() {
//   let teste = document.getElementById("c1");
//   teste.innerHTML = "Python";
// }

// testec1()

const c1 = document.getElementById('c1')
const c2 = document.getElementById('c2')
const c3 = document.getElementById('c3')
const c4 = document.getElementById('c4')
const c5 = document.getElementById('c5')

const array = [c1,c2,c3,c3,c4,c5]

console.log(array)

// for (d of array){
// d.innerHTML="CFB Cursos 😁"
// }

array.map((e)=>{
    e.innerHTML="CFB Cursos 😁"
    console.log(e)
})