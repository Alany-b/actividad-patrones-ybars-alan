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
class Notebook extends EquipoBase {
       ram: string;
  procesador: string;


  constructor(nombre: string, ram: string, procesador: string) {
    super(nombre);
    this.ram = ram;
    this.procesador = procesador;
  }

  detalles(): string {
    return `Tipo: Notebook, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}
class EquipoFactory {
    crearEquipo(tipo: string, nombre: string, ram: string, procesador: string) : EquipoBase {

      switch (tipo) {
        case 'Notebook':
           return new Notebook(nombre, ram, procesador);
        case 'Desktop':
          return new Desktop(nombre, ram, procesador);
        case 'Servidor':
            return new Servidor(nombre, ram, procesador);
        default:
          throw new Error('Tipo de equipo no reconocido');
    
      }
    }
}
const factory = new EquipoFactory();
const notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log(notebook.detalles());
// Tipo: Notebook, Nombre: Dell XPS, RAM: 16GB, Procesador: i7