import { useState } from "react";
import Button from "./Button";

const colorMap = {
  pendiente: "#f59e0b",
  completada: "#16a34a",
  en_progreso: "#2563eb",
};

const TaskItem = ({ tarea, onCompletar, onEliminar, onEditarTitulo }) => {
  const [editando, setEditando] = useState(false);
  const [nuevoTitulo, setNuevoTitulo] = useState(tarea.titulo);

  const estadoTexto = tarea.completada ? "completada" : "pendiente";
  const badgeColor = colorMap[estadoTexto] || "#6b7280";

  const badgeStyle = {
    backgroundColor: badgeColor,
    color: "#fff",
    padding: "2px 10px",
    borderRadius: "12px",
    fontSize: "0.75rem",
    fontWeight: "600",
    border: "none",
    fontFamily: "inherit",
    cursor: "pointer",
  };

  // Permite guardar cambios al confirmar; si se deja vacio o no se hace nada, se mantiene lo original
  const guardarEdicion = () => {
    if (nuevoTitulo.trim() !== "" && nuevoTitulo !== tarea.titulo) {
      if (onEditarTitulo) {
        onEditarTitulo(tarea.id, nuevoTitulo.trim());
      }
    } else {
      setNuevoTitulo(tarea.titulo);
    }
    setEditando(false);
  };

  const manejarKeyDown = (e) => {
    if (e.key === "Enter") {
      guardarEdicion();
    } else if (e.key === "Escape") {
      setNuevoTitulo(tarea.titulo);
      setEditando(false);
    }
  };

  return (
    <li className="task-item">
      <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1 }}>
        <button
          type="button"
          onClick={() => onCompletar(tarea.id, tarea.completada)}
          style={badgeStyle}
          aria-label={`Cambiar estado de la tarea (${estadoTexto})`}
        >
          {estadoTexto}
        </button>

        {editando ? (
          <input
            type="text"
            value={nuevoTitulo}
            onChange={(e) => setNuevoTitulo(e.target.value)}
            onBlur={guardarEdicion}
            onKeyDown={manejarKeyDown}
            autoFocus
            style={{
              flex: 1,
              padding: "4px 8px",
              fontSize: "0.95rem",
              borderRadius: "4px",
              border: "1px solid #3b82f6",
              outline: "none",
            }}
          />
        ) : (
          <span
            onDoubleClick={() => setEditando(true)}
            title="Doble clic para editar"
            style={{
              textDecoration: tarea.completada ? "line-through" : "none",
              color: tarea.completada ? "#94a3b8" : "inherit",
              cursor: "pointer",
            }}
          >
            {tarea.titulo}
          </span>
        )}
      </div>

      <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
        <Button
          label={tarea.completada ? "Desmarcar" : "Completar"}
          onClick={() => onCompletar(tarea.id, tarea.completada)}
          variant={tarea.completada ? "success" : "primary"}
        />
        <Button
          label="Eliminar"
          onClick={() => onEliminar(tarea.id)}
          variant="danger"
        />
      </div>
    </li>
  );
};

export default TaskItem;