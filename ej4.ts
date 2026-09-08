// ============================================
// EJERCICIO 4: Adapter
// ============================================

// Reutilizamos la misma forma de "Equipo" que usamos en el Ejercicio 1,
// para tipar los objetos que se guardan tanto en el sistema viejo como en el nuevo.
interface Equipo {
  nombre: string;
  tipo: string;
  estado: string;
}

// ---- CLASE VIEJA (ya existente, no la modificamos) ----
// Tiene su propio método, con un nombre distinto al que espera el sistema nuevo.
class InventarioViejo {
  private items: Equipo[] = []; // guarda los equipos con su propio nombre interno de lista

  // Método "viejo": nombre distinto a lo que pide el sistema nuevo (agregarEquipo).
  agregarItem(nombre: string, tipo: string, estado: string): void {
    this.items.push({ nombre, tipo, estado });
  }

  // Método para recuperar los datos guardados (necesario para que el adaptador
  // pueda después exponerlos a través de "listarEquipos").
  obtenerItems(): Equipo[] {
    return this.items;
  }
}

// ---- INTERFAZ NUEVA (el contrato que espera el sistema actual) ----
// Define QUÉ métodos debe tener cualquier cosa que el sistema nuevo trate como "un inventario".
interface Inventario {
  agregarEquipo(nombre: string, tipo: string, estado: string): void;
  listarEquipos(): Equipo[];
}

// ---- EL ADAPTADOR (el puente entre ambos mundos) ----
// Cumple el contrato "Inventario" (implements), pero por dentro delega
// todo el trabajo real hacia una instancia de InventarioViejo.
class AdaptadorInventario implements Inventario {
  private inventarioViejo: InventarioViejo; // referencia al objeto "viejo" que hace el trabajo real

  constructor(inventarioViejo: InventarioViejo) {
    this.inventarioViejo = inventarioViejo; // se recibe desde afuera y se guarda
  }

  // Cumple con el nombre "agregarEquipo" que exige la interfaz,
  // pero por dentro traduce la llamada hacia "agregarItem" del sistema viejo.
  agregarEquipo(nombre: string, tipo: string, estado: string): void {
    this.inventarioViejo.agregarItem(nombre, tipo, estado);
  }

  // Cumple con el nombre "listarEquipos" que exige la interfaz,
  // traduciendo hacia "obtenerItems" del sistema viejo.
  listarEquipos(): Equipo[] {
    return this.inventarioViejo.obtenerItems();
  }
}

// ---- Código de prueba ----
const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);

adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log(adaptador.listarEquipos());
// [{ nombre: "Servidor Dell", tipo: "Servidor", estado: "disponible" }]