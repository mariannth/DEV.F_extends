// src/components/ListaCompras.jsx
import { useState, useEffect } from "react";

function ListaCompras() {
  const [productos, setProductos] = useState(() => {
    const dataGuardada = localStorage.getItem("productos");
    return dataGuardada ? JSON.parse(dataGuardada) : [];
  });
  const [nuevoProducto, setNuevoProducto] = useState("");
  const [modoEdicion, setModoEdicion] = useState(false);
  const [indiceEditar, setIndiceEditar] = useState(null);

  // Guardar en localStorage cada vez que cambie productos
  useEffect(() => {
    localStorage.setItem("productos", JSON.stringify(productos));
  }, [productos]);

  // Agregar o actualizar producto
  const agregarProducto = () => {
    if (nuevoProducto.trim() === "") return;

    if (modoEdicion) {
      const copia = [...productos];
      copia[indiceEditar] = nuevoProducto;
      setProductos(copia);
      setModoEdicion(false);
      setIndiceEditar(null);
    } else {
      // evitar duplicados
      if (productos.includes(nuevoProducto)) return alert("Producto duplicado");
      setProductos([...productos, nuevoProducto]);
    }
    setNuevoProducto("");
  };

  const eliminarProducto = (index) => {
    const nuevaLista = productos.filter((_, i) => i !== index);
    setProductos(nuevaLista);
  };

  const editarProducto = (index) => {
    setNuevoProducto(productos[index]);
    setModoEdicion(true);
    setIndiceEditar(index);
  };

  return (
    <div style={styles.container}>
      <h2>🛒 Lista de Compras</h2>
      <div style={styles.inputGroup}>
        <input
          type="text"
          placeholder="Escribe un producto"
          value={nuevoProducto}
          onChange={(e) => setNuevoProducto(e.target.value)}
          style={styles.input}
        />
        <button onClick={agregarProducto} style={styles.button}>
          {modoEdicion ? "Actualizar" : "Agregar"}
        </button>
      </div>
      <ul style={styles.lista}>
        {productos.map((producto, index) => (
          <li key={index} style={styles.item}>
            {producto}
            <div style={styles.actions}>
              <button onClick={() => editarProducto(index)} style={styles.editar}>
                ✏️
              </button>
              <button onClick={() => eliminarProducto(index)} style={styles.eliminar}>
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: { maxWidth: "400px", margin: "0 auto", textAlign: "center" },
  inputGroup: { display: "flex", gap: "10px", marginBottom: "20px" },
  input: { flex: 1, padding: "8px" },
  button: { padding: "8px 12px", backgroundColor: "green", color: "white" },
  lista: { listStyle: "none", padding: 0 },
  item: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px",
    borderBottom: "1px solid #ccc",
  },
  actions: { display: "flex", gap: "5px" },
  eliminar: { backgroundColor: "red", color: "white", border: "none" },
  editar: { backgroundColor: "blue", color: "white", border: "none" },
};

export default ListaCompras;
