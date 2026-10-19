import Button from "./Button";
import TaskItem from "./TaskItem";

const TaskList = ({
  tareas = [],
  tareasTotales = 0,
  busqueda = "",
  filtro = "todas",
  onCambiarFiltro,
  onCompletar,
  onEliminar,
  onEditarTitulo,
  guardando,
}) => {
  const hayBusquedaOClasificacion = busqueda.trim() !== "" || filtro !== "todas";

  return (
    <div>
      <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
        <Button
          label="📋 Todas"
          onClick={() => onCambiarFiltro("todas")}
          variant={filtro === "todas" ? "primary" : "secondary"}
          disabled={guardando}
        />
        <Button
          label="⏳ Pendientes"
          onClick={() => onCambiarFiltro("pendientes")}
          variant={filtro === "pendientes" ? "primary" : "secondary"}
          disabled={guardando}
        />
        <Button
          label="✅ Completadas"
          onClick={() => onCambiarFiltro("completadas")}
          variant={filtro === "completadas" ? "primary" : "secondary"}
          disabled={guardando}
        />
      </div>

      {tareasTotales === 0 ? (
        <div className="empty-state">
          <span style={{ fontSize: "2.5rem" }}>📝</span>
          <p>¡Aún no tienes tareas! Agrega una para comenzar.</p>
        </div>
      ) : tareas.length === 0 && hayBusquedaOClasificacion ? (
        <div className="empty-state">
          <span style={{ fontSize: "2.5rem" }}>🔍</span>
          <p>No se encontraron tareas con ese criterio.</p>
        </div>
      ) : (
        <ul className="task-list">
          {tareas.map(t => (
            <TaskItem
              key={t.id}
              tarea={t}
              onCompletar={onCompletar}
              onEliminar={onEliminar}
              onEditarTitulo={onEditarTitulo}
              guardando={guardando}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;

