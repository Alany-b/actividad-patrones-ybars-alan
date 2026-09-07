interface Observador {
  notificar(nombreEquipo: string, nuevoEstado: string): void;
}

class Soporte implements Observador {
  notificar(nombreEquipo: string, nuevoEstado: string): void {
    console.log(`Soporte notificado: ${nombreEquipo} ha cambiado su estado a ${nuevoEstado}.`);
  }
}

class Equipo {

nombre: string;
estado: string;
tipo: string;

constructor(nombre: string, tipo: string, estado: string) {
  this.nombre = nombre;
  this.tipo = tipo;
  this.estado = estado;
}
private observadores: Observador[] = [];


agregarObservador(observador: Observador): void {
  this.observadores.push(observador);
}

  cambiarEstado(nuevoEstado: string): void {

  this.estado = nuevoEstado;

  for (const observador of this.observadores) {
    observador.notificar(this.nombre, nuevoEstado);

    
  }
  }
}