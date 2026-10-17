import { useState, useEffect } from "react";

// URL base de la API
const API_URL = "https://jsonplaceholder.typicode.com/todos";

const useTareas = () => {
  const [tareas, setTareas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // GET - Carga inicial de tareas
  useEffect(() => {
    const cargarTareas = async () => {
      try {
        const res = await fetch(`${API_URL}?_limit=10`);
        if (!res.ok) throw new Error("Error al cargar las tareas");

        const datos = await res.json();
        const tareasFormateadas = datos.map((t) => ({
          id: t.id,
          titulo: t.title,
          completada: t.completed,
        }));

        setTareas(tareasFormateadas);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    cargarTareas();
  }, []);

  // POST - Crea una nueva tarea
  const crearTarea = async (titulo) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: titulo,
          completed: false,
          userId: 1,
        }),
      });

      if (!res.ok) throw new Error("Error al crear la tarea");

      const nueva = await res.json();

      const tareaLocal = {
        id: Date.now(),
        titulo: nueva.title,
        completada: nueva.completed,
      };

      setTareas((prev) => [tareaLocal, ...prev]);
    } catch (err) {
      setError(err.message);
    }
  };

  // PUT - Modifica una tarea existente
  const actualizarTarea = async (id, cambios) => {
    try {
      // Actualizamos primero el estado local para respuesta inmediata
      setTareas((prev) =>
        prev.map((t) => (t.id === id ? { ...t, ...cambios } : t))
      );

      // Si es una tarea creada localmente (ID generado por Date.now), no existe en el servidor remoto
      if (id > 200) return;

      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cambios),
      });

      if (!res.ok) throw new Error("Error al actualizar la tarea");
    } catch (err) {
      setError(err.message);
    }
  };

  // DELETE - Elimina una tarea
  const eliminarTarea = async (id) => {
    try {
      setTareas((prev) => prev.filter((t) => t.id !== id));

      // Si es una tarea local, no necesita eliminarse en el servidor
      if (id > 200) return;

      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Error al eliminar la tarea");
    } catch (err) {
      setError(err.message);
    }
  };

  return { tareas, cargando, error, crearTarea, actualizarTarea, eliminarTarea };
};

export default useTareas;