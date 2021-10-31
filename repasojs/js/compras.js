class ComprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad)  {
      super(nombre, prioridad);
      this.cantidad=cantidad;
  }
    mostrar() {
    super.mostrar();
      console.log(` y la cantidad es ${this.cantidad}`)
    }
    hola (){
      return 'hola';
    }
  
  }