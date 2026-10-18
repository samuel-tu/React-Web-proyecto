import { useState } from "react";
import TaskList from "../components/TaskList";

const TasksView = ({
  tareas,
  filtro,
  onCambiarFiltro,
  onCompletar,
  onEliminar,
  onEditarTitulo,
  cargando,
  error,
}) => {
  const [busqueda, setBusqueda] = useState("");

  const tareasFiltradas = tareas.filter((t) => {
    const coincideEstado =
      filtro === "completadas"
        ? t.completada
        : filtro === "pendientes"
        ? !t.completada
        : true;

    const coincideBusqueda = (t.titulo || "")
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    return coincideEstado && coincideBusqueda;
  });

  return (
    <>
      {cargando && <p className="estado-carga">⏳ Cargando tareas...</p>}
      {error && <p className="estado-error">⚠️ Error: {error}</p>}
      {!cargando && !error && (
        <div className="card">
          <h2 className="section-title">Mis tareas</h2>
          <div style={{ marginBottom: "1rem" }}>
            <input
              type="text"
              placeholder="🔍 Buscar tareas por título..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              style={{
                width: "100%",
                padding: "8px 12px",
                borderRadius: "6px",
                border: "1px solid #cbd5e1",
                boxSizing: "border-box",
                fontSize: "0.95rem",
              }}
            />
          </div>

          <TaskList
            tareas={tareasFiltradas}
            filtro={filtro}
            onCambiarFiltro={onCambiarFiltro}
            onCompletar={onCompletar}
            onEliminar={onEliminar}
            onEditarTitulo={onEditarTitulo}
          />
        </div>
      )}
    </>
  );
};

export default TasksView;