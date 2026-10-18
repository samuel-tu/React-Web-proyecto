import { useState, useEffect } from "react";
import {
  getTareas,
  postTarea,
  putTarea,
  deleteTarea,
} from "../services/tareasService";

const useTareas = () => {
  const [tareas, setTareas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // GET - Carga inicial de tareas (RF01)
  useEffect(() => {
    const cargar = async () => {
      try {
        const datos = await getTareas(10);
        setTareas(
          datos.map((t) => ({ id: t.id, titulo: t.title, completada: t.completed }))
        );
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };
    cargar();
  }, []);

  // POST - Crea una nueva tarea (RF03)
  const crearTarea = async (titulo) => {
    try {
      const nueva = await postTarea(titulo);
      setTareas((prev) => [
        { id: Date.now(), titulo: nueva.title || titulo, completada: false },
        ...prev,
      ]);
    } catch (err) {
      setError(err.message);
    }
  };

  // PUT - Modifica una tarea existente (RF05)
  const actualizarTarea = async (id, cambios) => {
    try {
      await putTarea(id, cambios);
      setTareas((prev) => prev.map((t) => (t.id === id ? { ...t, ...cambios } : t)));
    } catch (err) {
      setError(err.message);
    }
  };

  // PUT - Edición específica del título con validación (RF06)
  const editarTitulo = async (id, nuevoTitulo) => {
    if (!nuevoTitulo || nuevoTitulo.trim() === "") return;
    await actualizarTarea(id, { titulo: nuevoTitulo.trim() });
  };

  // DELETE - Elimina una tarea (RF07)
  const eliminarTarea = async (id) => {
    try {
      await deleteTarea(id);
      setTareas((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    tareas,
    cargando,
    error,
    crearTarea,
    actualizarTarea,
    editarTitulo,
    eliminarTarea,
  };
};

export default useTareas;