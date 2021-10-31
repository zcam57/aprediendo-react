// Crear variables




// var  aprendiendo99 = true;
// aprendiendo99 = false;
//aprendiendo99 = 20;
// aprendiendo99 = "Juan";

// variables con conts siempre constante

// const aprendiendo = "JavaScript";
// prendiendo = true;

//console.log(aprendiendo);

// variables con let parecida a var

//let aprendiendo = "aprendiendo";

//aprendiendo = true;

//console.log(aprendiendo);

// Scope

// var musica = "Rock";

// if (musica) {
//     var musica = "Grunge";
//     console.log("dentro del if : ", musica)

// }
// console.log("fuera del IF: ", musica);

// scope con let y const evita riesgo de mesclar valores con variables iguales


// let musica = "Rock";

//  if (musica) {
//      let   musica = "Grunge";
//      console.log("dentro del if : ", musica)

//  }
//  console.log("fuera del IF: ", musica);

// Templates de string  en java script

// const nombre = "Mac";
// const trabajo = "Futuro Desarrollador Web";

// concatenar javascript

// forma vieja
// console.log("Nombre: " + nombre + ", Trabajo: "
// + trabajo);

// forma nueva
// console.log(`Nombre:  ${nombre}, Trabajo:
//  ${trabajo}`);

// concatenar con multiples lineas
  // const contenedorApp = document.querySelector("#app");
//  let html = "<ul>" +
//                  "<li> Nombre: " +nombre + "</li>" +
//                 "<li> Trabajo: " +trabajo + "</li>" +
//              "</ul>"

// concatenar multiples variables de forma mas limpia  template usando ``
// let html = `
//             <ul>
//                 <li> Nombre: ${nombre}</li>
//                 <li> Trabajo: ${trabajo}</li>
//             </ul>
//     `;

// contenedorApp.innerHTML = html;

// Creando una funcion

// function saludar(nombre) {
//   console.log("Bienvenido " +nombre);
// }
// saludar("Juan");
// saludar("Alejandra");
// saludar("miguel");

// function expression

// const cliente = function(nombrecliente){
//   console.log("mostrando datos del cliente: " + nombrecliente);

// }
// cliente("Mac");

// parametro por default en las funciones

// function actividad(nombre, actividad) {
//   console.log(`La persona ${nombre}, esta realizando  la actividad ${actividad}`);
// }
// const actividad = function(nombre = "Walter White", actividad = "Enseñar Quimica"){
//   console.log(`La persona ${nombre}, esta realizando  la actividad ${actividad}`);
// }
// actividad("Mac", "Aprender JavaScript");
// actividad("Pedro","Creando un sitio web");
// actividad();

// Arrow functions
// let viajando = destino=> `Viajando a la ciudad  de: ${destino}`;


// let viaje;
// viaje =  viajando("Paris");
// viaje =  viajando("Londres");
// viaje =  viajando("Barcelona");

// console.log(viaje);

// objetos
// objetos Literal


// const persona = {
//   nombre: "Juan",
//   profesion: "Desarrollador web",
//   edad: "70"
// }


// console.log(persona);
// console.log(persona.nombre);
// console.log(persona.profesion);
// console.log(persona.edad);
// console.log(persona["edad"]);


// object constructor

// function Tarea(nombre, urgencia){
//   this.nombre = nombre;
//   this.urgencia = urgencia;
// }

// Crear una nueva tarea;
// const tarea1 = new Tarea("Aprender JavaScript y React", "Urgente");
// console.log(tarea1);

// Tarea.prototype.mostrarInformacionTarea = function (){
//   return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`

// }
// const tarea1 = new Tarea("Aprender JavaScript y React", "Urgente");
// console.log(tarea1);
// console.log(tarea1.mostrarInformacionTarea() );
// const mostrarInfo = mostrarInformacionTarea(tarea1.nombre, tarea1.urgencia);
// console.log(mostrarInfo);

  // Destructuring de objetos

// const aprendiendoJS = {
//   version:{
//     nueva: "ES6",
//     anterior: "ES5"
//   },
//   framworks: ["React", "VueJS", "AngularJS"]
// }
// Destructuring es extraer  valores de un objeto

// console.log(aprendiendoJS);

// version anterior

// let version = aprendiendoJS.version.nueva;
// let framworks = aprendiendoJS.framworks[1];
// console.log(framworks);


// Destructuring forma nueva

// let {nueva} = aprendiendoJS.version;
// console.log(nueva);

// object literal enhancement

// const banda = "Metalica";
// const genero = "Heavy metal";
// const canciones = ["Master of puppets", "Seek & Destroy", "Enter Sandman"];

// forma anterior

// const metalica = {
//   banda: banda,
//   genero: genero,
//   canciones: canciones
// }

// forma nueva

// const metalica = {banda ,genero, canciones};

// console.log(metalica);

// métodos o funciones en un objeto

// const persona = {
//   nombre: "juan",
//   trabajo: "Desarrollador web",
//   edad: 500,
//   musicarRock: true,
//   mostrarInformacion: function(){
//     console.log(`${this.nombre} es ${this.trabajo} y su edad es
//     ${this.edad}`)
//   }
// }
// persona.mostrarInformacion();

// Arreglos y .map

//  const carrito = ['producto 1', 'producto 2', 'producto 3 '];

// console.log(carrito);

// const appContenedor = document.querySelector('#app');

// let html = '';
// carrito.forEach(producto => {
//  html += `<li>${producto}</li>`;
// })

// appContenedor.innerHTML = html;

// map
// carrito = ['producto 1', 'producto 2', 'producto 3 '];

// carrito.map(producto => {
//   return 'EL producto es ' + producto;
// });


// object,keys
// const persona = {
//   nombre: 'Mac',
//   profesion: 'Desarrollador web',
//   edad: 500
// }

// console.log(Object.keys(persona));

// Sprear operator ...

// let lenguajes = ['JavaScript', 'PHP', 'Python'];
// let frameworks = ['ReactJS', 'Laravel', 'Django'];

// unir los arrreglos en 1 solo

// let combinacion = [...lenguajes,...frameworks];
// console.log(combinacion);

// let [ultimo] = lenguajes.reverse();

//con spread


// console.log(ultimo);

// function suma(a,b,c){
//   console.log(a+b+c);
// }
// const numeros = [1,2,3];

// suma(...numeros);

// Métodos en arreglos 

// const personas = [
//   {nombre: 'Juan', edad: 23, aprendiendo: 'Javascript'},
//   {nombre: 'pablo', edad: 18, aprendiendo: 'PHP'},
//   {nombre: 'Alejandra', edad: 21, aprendiendo: 'AdobeXD'},
//   {nombre: 'Care', edad: 30, aprendiendo: 'Python'},
//   {nombre: 'Miguel', edad: 35, aprendiendo: 'ReactJS'},
// ]
// console.log(personas);

// mayores de 28 años

// const mayores = personas.filter(persona => {
//   return persona.edad > 28;
// });

//console.log(mayores);

// que aprende alejandara y su edad
// const alejandra = personas.find(persona => {
//   return persona.nombre == 'Alejandra'
// });
//console.log('Alendra esta aprendiendo: ' + alejandra.aprendiendo);

// reduce

// let total = personas.reduce((edadTotal, persona) => {
//   return edadTotal + persona.edad;
// }, 0);


//console.log(total / personas.length);


// Promises

// const aplicarDescuento = new Promise((resolve, reject) => {
//     setTimeout( () => {
//         let descuento = true;

//         if(descuento) {
//           resolve('Descuento aplicado!');
//         }else{
//           reject('No se pudo  aplicar el descuento')
//         }
//     }, 3000);
// });

// aplicarDescuento.then(resultado =>{
//   console.log(resultado);
// }).catch(error => {
//   console.log(error);
// })


// promise con ajax

// const descargarUsuarios = cantidad => new Promise((resolve, reject)=> {
//      //pasar la cantidad a la api
//     const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;
    
//     // llamado a ajax
//     const xhr = new XMLHttpRequest();
   
//     // abrir la conexion
//     xhr.open('GET', api, true);
    
//     //on load
//      xhr.onload = () => {
//       if(xhr.status == 200) {
//          resolve(JSON.parse(xhr.responseText).results);
//       }else{
//          reject(Error(xhr.statusText));
//       }
//     }
    
//     //opcional (on error)
//      xhr.oneror = (error) => reject(error);
    
//     send
//      xhr.send()
//  });
// descargarUsuarios(30)
//      .then(
//         miembros => imprimirHTML(miembros),
//         error => console.error(
//         new Error('Hubo un error'+ error)
//        )
//    );

//    function imprimirHTML(usuarios) {
//     let html = '';
//     usuarios.forEach(usuario => {
//      html +=  `
//        <li>
//            Nombre: ${usuario.name.first} ${usuario.name.last}
//            País: ${usuario.nat}
//            Imagen:
//            <img src="${usuario.picture.medium}">
//       </li>
//   `;
     
//    });

//    const contenedorApp = document.querySelector('#app');
//    contenedorApp.innerHTML = html;
//   }


import Tarea from "./tareas.js";

const tarea1 = new Tarea('Aprender JavaScript', 'Urgente');

console.log(tarea1);

tarea1.mostrar();