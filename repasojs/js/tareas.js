




// Escribir classes

export default class Tarea {
    constructor(nombre ,prioridad) {
      this.nombre=nombre;
      this.prioridad=prioridad
    }
    mostrar() {
        console.log(`${this.nombre} tiene un prioridad de ${this.prioridad}`)
    }
  }
  
  
  
  // Crear los objetos 
  
//   let tarea1 = new Tarea('Aprender JavaScript', 'Alta')
//   let tarea2 = new Tarea('Preparar cafe', 'Alta')
//   let tarea3 = new Tarea('Pasear al perro', 'Media')
//   let tarea4 = new Tarea('Salir con los amigos ', 'Baja')
  
  // console.log(tarea1.mostrar());
  // console.log(tarea2.mostrar());
  // console.log(tarea3.mostrar());
  // console.log(tarea4.mostrar());
  
  
  //compras
  
//   let compra1 = new ComprasPendientes('Jabon', 'Urgente', 3);
//   console.log(compra1.mostrar());
//   console.log(compra1.hola());