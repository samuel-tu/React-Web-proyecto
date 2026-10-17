import { useState, useEffect } from "react";
import {
  getTareas,
  postTarea,
  putTarea,
  deleteTarea,
} from "../services/tareasService";

// URL base de la API
const API_URL = "https://jsonplaceholder.typicode.com/todos";

const useTareas = () => {
  const [tareas, setTareas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // GET - Carga inicial de tareas
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

  // POST - Crea una nueva tarea
  const crearTarea = async (titulo) => {
    try {
      const nueva = await postTarea(titulo);
      setTareas((prev) => [
        {id: Date.now(), titulo: nueva.title, completada: nueva.completed},
        ...prev,
      ]);
    } catch (err) {
      setError(err.message);
    }
  };

  // PUT - Modifica una tarea existente
  const actualizarTarea = async (id, cambios) => {
    try {
      await putTarea(id, cambios);
      setTareas((prev) => prev.map((t) => (t.id === id ? { ...t, ...cambios } : t)));
    } catch (err) {
      setError(err.message);
    }
  };

  // DELETE - Elimina una tarea
  const eliminarTarea = async (id) => {
    try {
      await deleteTarea(id);
      setTareas((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return { tareas, cargando, error, crearTarea, actualizarTarea, eliminarTarea };
};

export default useTareas;