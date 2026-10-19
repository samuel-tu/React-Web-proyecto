import { useState, useEffect } from "react";
import useTareas from "./hooks/useTareas";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Modal from "./components/Modal";
import SummaryView from "./views/SummaryView";
import TasksView from "./views/TasksView";
import NewTaskView from "./views/NewTaskView";
import "./App.css";

const App = () => {
  const {
    tareas,
    cargando,
    guardando,
    error,
    crearTarea,
    actualizarTarea,
    eliminarTarea,
  } = useTareas();

  const [tareaAEliminar, setTareaAEliminar] = useState(null);

  // Estado de navegación para alternar vistas (RF13)
  const [vistaActiva, setVistaActiva] = useState("resumen");

  const [filtro, setFiltro] = useState("todas");

  const tareasFiltradas = tareas.filter((t) => {
    if (filtro === "completadas") return t.completada;
    if (filtro === "pendientes") return !t.completada;
    return true;
  });

  const total = tareas.length;
  const completadas = tareas.filter((t) => t.completada).length;
  const pendientes = total - completadas;

  //Efecto 3
  useEffect(() => {
    const pendientesCount = tareas.filter((t) => !t.completada).length;
    document.title = `TaskCampus (${pendientesCount} pendientes)`;
  }, [tareas]);

  //Efecto 4
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("TaskCampus activo");
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  //Funcion 1
  const handleAgregarTarea = async (titulo) => {
    await crearTarea(titulo);
    setVistaActiva("tareas"); // Tras crear la tarea, redirige a la lista
  };

  //Funcion 2
  const handleToggleCompletada = (id, completadaActual) => {
    actualizarTarea(id, { completada: !completadaActual });
  };

  const handleEditarTitulo = (id, cambios) => {
    actualizarTarea(id, cambios);
  };

  const handleConfirmarEliminacion = () => {
    eliminarTarea(tareaAEliminar);
    setTareaAEliminar(null);
  };

  return (
    <div className="app-container">
      {/* Encabezado y Navegación presentes en todas las vistas */}
      <Header title="TaskCampus" description="Gestiona tus tareas académicas" />
      <Navigation vistaActiva={vistaActiva} onCambiarVista={setVistaActiva} />

      {/* Mensajes de carga con emojis */}
      {cargando && (
        <p className="estado-carga" role="status">
          ⏳ Cargando tareas...
        </p>
      )}
      {guardando && (
        <p className="estado-carga" role="status">
          💾 Guardando cambios...
        </p>
      )}
      {error && <p className="estado-error">⚠️ Error: {error}</p>}

      {/* Vista 1: Resumen de tareas */}
      {vistaActiva === "resumen" && (
        <SummaryView
          total={total}
          completadas={completadas}
          pendientes={pendientes}
          mostrando={tareasFiltradas.length}
          filtroActual={filtro}
        />
      )}

      {/* Vista 2: Agregar nueva tarea */}
      {vistaActiva === "nueva" && (
        <NewTaskView onAgregar={handleAgregarTarea} guardando={guardando} />
      )}

      {/* Vista 3: Listado de tareas */}
      {vistaActiva === "tareas" && (
        <TasksView
          tareas={tareas}
          filtro={filtro}
          onCambiarFiltro={setFiltro}
          onCompletar={(id, completadaActual) =>
            handleToggleCompletada(
              id,
              completadaActual !== undefined
                ? completadaActual
                : tareas.find((t) => t.id === id)?.completada
            )
          }
          onEliminar={setTareaAEliminar}
          onEditarTitulo={handleEditarTitulo}
          cargando={cargando}
          error={error}
          guardando={guardando}
        />
      )}

      {/* Modal global de confirmación para eliminar */}
      <Modal
        visible={tareaAEliminar !== null}
        mensaje="¿Seguro que deseas eliminar esta tarea? Esta acción no se puede deshacer."
        onConfirmar={handleConfirmarEliminacion}
        onCancelar={() => setTareaAEliminar(null)}
        guardando={guardando}
      />
    </div>
  );
};

export default App;
