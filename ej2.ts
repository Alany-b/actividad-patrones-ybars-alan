abstract class EquipoBase {
    nombre: string;              // propiedad común a todo equipo, sin importar el tipo concreto
     
    constructor( nombre : string ) {
        this.nombre = nombre;    // el constructor recibe el nombre y lo guarda en la instancia
    }

    abstract detalles(): string; // promesa: cada clase hija DEBE implementar esto a su manera
}

class Desktop extends EquipoBase {
      ram: string;
  procesador: string;

  constructor(nombre: string, ram: string, procesador: string) {
    super(nombre);
    this.ram = ram;
    this.procesador = procesador;
  }

   detalles(): string {
    return `Tipo: Desktop, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class Servidor extends EquipoBase {
       ram: string;
  procesador: string;


  constructor(nombre: string, ram: string, procesador: string) {
    super(nombre);
    this.ram = ram;
    this.procesador = procesador;
  }

  detalles(): string {
    return `Tipo: Servidor, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}