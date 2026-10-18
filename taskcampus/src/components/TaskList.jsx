import Button from "./Button";
import TaskItem from "./TaskItem";

const TaskList = ({
  tareas,
  filtro,
  onCambiarFiltro,
  onCompletar,
  onEliminar,
  onEditarTitulo,
  onToggle,
}) => {
  const handleCompletar = (id, completadaActual) => {
    if (onToggle) {
      onToggle(id, completadaActual);
    } else if (onCompletar) {
      onCompletar(id);
    }
  };

  return (
    <div>
      {/* Botones de filtro de estado */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
        <Button
          label="📋 Todas"
          onClick={() => onCambiarFiltro("todas")}
          variant={filtro === "todas" ? "primary" : "secondary"}
        />
        <Button
          label="⏳ Pendientes"
          onClick={() => onCambiarFiltro("pendientes")}
          variant={filtro === "pendientes" ? "primary" : "secondary"}
        />
        <Button
          label="✅ Completadas"
          onClick={() => onCambiarFiltro("completadas")}
          variant={filtro === "completadas" ? "primary" : "secondary"}
        />
      </div>

      {tareas.length === 0 ? (
        <div className="empty-state" role="status">
          <span className="empty-state-icon" aria-hidden="true">🔍</span>
          <p>No se encontraron tareas con ese criterio.</p>
        </div>
      ) : (
        <ul className="task-list">
          {tareas.map((tarea) => (
            <TaskItem
              key={tarea.id}
              tarea={tarea}
              onCompletar={handleCompletar}
              onEliminar={onEliminar}
              onEditarTitulo={onEditarTitulo}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;