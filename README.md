##  `patrones-diseno-practica-main` — Patrones de diseño

Implementaciones de patrones clásicos sobre un mismo dominio: la gestión de un inventario de equipos.

- **Singleton** (`ej1.ts`): `Inventario` garantiza una única instancia compartida mediante un constructor privado y un método estático `obtenerInstancia()`.
- **Factory Method** (`ej2.ts`): `EquipoFactory` crea `Notebook`, `Desktop` o `Servidor` a partir de un tipo, devolviendo siempre un tipo común (`Equipo`) sin que el cliente conozca las clases concretas.
- **Observer** (`ej3.ts`): un `Equipo` notifica automáticamente a sus observadores (por ejemplo, `Soporte`) cada vez que cambia de estado, dependiendo de una interfaz y no de clases concretas.
- **Adapter** (`ej4.ts`): `AdaptadorInventario` conecta un inventario antiguo (`agregarItem` / `listarItems`) con la interfaz nueva (`agregarEquipo` / `listarEquipos`) sin modificar el código legado.

**Ejecutar:** `npm install` y luego `npm run ej1` … `npm run ej4`.
