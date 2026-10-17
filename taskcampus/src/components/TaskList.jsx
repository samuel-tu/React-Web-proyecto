import Button from "./Button";
import Badge from "./Badge";
import EmptyState from "./EmptyState";

const TaskList = ({ tareas, filtro, onCambiarFiltro, onCompletar, onEliminar, onToggle }) => {
  const tareasFiltradas = tareas.filter((t) => {
    if (filtro === "pendientes") return !t.completada;
    if (filtro === "completadas") return t.completada;
    return true;
  });

  const handleCompletar = (id, completadaActual) => {
    if (onToggle) {
      onToggle(id, completadaActual);
    } else if (onCompletar) {
      onCompletar(id);
    }
  };

  return (
    <div>
      {/* Botones de filtro */}
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

      {tareasFiltradas.length === 0 ? (
        <EmptyState
          mensaje={
            tareas.length === 0
              ? "¡Aún no tienes tareas! Agrega una para comenzar."
              : "No hay tareas en esta categoría."
          }
          icono={tareas.length === 0 ? "📝" : "🎉"}
        />
      ) : (
        <ul className="task-list">
          {tareasFiltradas.map((tarea) => (
            <li key={tarea.id} className="task-item">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1 }}>
                <Badge
                  texto={tarea.completada ? "completada" : "pendiente"}
                  onClick={() => handleCompletar(tarea.id, tarea.completada)}
                />
                <span
                  style={{
                    textDecoration: tarea.completada ? "line-through" : "none",
                    color: tarea.completada ? "#94a3b8" : "inherit",
                  }}
                >
                  {tarea.titulo}
                </span>
              </div>

              <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
                <Button
                  label={tarea.completada ? "Desmarcar" : "Completar"}
                  onClick={() => handleCompletar(tarea.id, tarea.completada)}
                  variant={tarea.completada ? "success" : "primary"}
                />
                {/* Este botón activba el modal */}
                <Button
                  label="Eliminar"
                  onClick={() => onEliminar(tarea.id)}
                  variant="danger"
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;