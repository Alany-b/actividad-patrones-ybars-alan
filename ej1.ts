interface Equipo {

    nombre : string; 
    tipo : string;
    estado : string;
}


class Inventario {

private static instancia : Inventario;


private equipos : Equipo[] = [];

private constructor() {}

static obtenerInstancia() : Inventario {

    if(!Inventario.instancia) {
        Inventario.instancia = new Inventario();
    }

    return Inventario.instancia;
}



agregarEquipo(nombre : string , tipo : string, estado : string) : void {

    this.equipos.push({nombre, tipo, estado});

}


listarEquipos() : Equipo[] {

    return this.equipos;
    }
} 

const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
console.log(inventario.listarEquipos());
// [{ nombre: "Notebook HP", tipo: "Portátil", estado: "disponible" }]