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
  guardando,
}) => {
  const [busqueda, setBusqueda] = useState("");

  const total = tareas.length;
  const completadas = tareas.filter(t => t.completada).length;
  const pendientes = total - completadas;

  const filtroFormateado = filtro ? filtro.charAt(0).toUpperCase() + filtro.slice(1) : "";

  const tareasFiltradas = tareas.filter(t => {
    const coincideEstado = filtro === "completadas" ? t.completada : filtro === "pendientes" ? !t.completada : true;
    const coincideBusqueda = (t.titulo || "").toLowerCase().startsWith(busqueda.trim().toLowerCase());
    return coincideEstado && coincideBusqueda;
  });

  return (
    <>
      {cargando && <p className="estado-carga">Cargando tareas...</p>}
      {error && <p className="estado-error">Error: {error}</p>}
      {!cargando && !error && (
        <div className="card">
          <h2 className="section-title">Mis tareas</h2>

          <div className="task-summary" style={{ marginBottom: "20px" }}>
            <div className="task-summary-item">
              <span className="task-summary-count task-summary-count-total">{total}</span>
              <span>Total</span>
            </div>
            <div className="task-summary-item">
              <span className="task-summary-count task-summary-count-completadas">{completadas}</span>
              <span>Completadas</span>
            </div>
            <div className="task-summary-item">
              <span className="task-summary-count task-summary-count-pendientes">{pendientes}</span>
              <span>Pendientes</span>
            </div>
            <div className="task-summary-item">
              <span className="task-summary-count" style={{ color: "#0284c7" }}>
                {tareasFiltradas.length}
              </span>
              <span>Mostrando ({filtroFormateado})</span>
            </div>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <input
              type="text"
              placeholder="Buscar tareas por título..."
              value={busqueda}
              onChange={e => setBusqueda(e.target.value)}
              disabled={guardando}
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
            tareasTotales={tareas.length}
            busqueda={busqueda}
            filtro={filtro}
            onCambiarFiltro={onCambiarFiltro}
            onCompletar={onCompletar}
            onEliminar={onEliminar}
            onEditarTitulo={onEditarTitulo}
            guardando={guardando}
          />
        </div>
      )}
    </>
  );
};

export default TasksView;
