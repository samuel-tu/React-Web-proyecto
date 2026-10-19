import { useState, useRef } from "react";
import Button from "./Button";

const colorMap = {
  pendiente: "#ca8a04",
  completada: "#16a34a",
  en_progreso: "#2563eb",
};

const TaskItem = ({
  tarea,
  onCompletar,
  onEliminar,
  onEditarTitulo,
  guardando,
}) => {
  const [editando, setEditando] = useState(false);
  const [tituloEditado, setTituloEditado] = useState(tarea.titulo);
  const commitEnCurso = useRef(false);

  const estadoTexto = tarea.completada ? "completada" : "pendiente";
  const badgeColor = colorMap[estadoTexto] || "#6b7280";

  const iniciarEdicion = () => {
    if (guardando) return;
    commitEnCurso.current = false;
    setTituloEditado(tarea.titulo);
    setEditando(true);
  };

  const guardarCambios = () => {
    if (commitEnCurso.current || guardando) return;
    commitEnCurso.current = true;
    const limpio = tituloEditado.trim();
    
    if (limpio && limpio !== tarea.titulo) {
      if (onEditarTitulo) {
        onEditarTitulo(tarea.id, { titulo: limpio });
      }
    } else {
      setTituloEditado(tarea.titulo);
    }
    setEditando(false);
  };

  const handleToggle = () => {
    if (guardando) return;
    if (onCompletar) {
      onCompletar(tarea.id, tarea.completada);
    }
  };

  return (
    <li className="task-item">
      <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1, minWidth: 0 }}>
        <button
          type="button"
          onClick={handleToggle}
          disabled={guardando}
          style={{
            backgroundColor: badgeColor,
            color: "#ffffff",
            padding: "3px 10px",
            borderRadius: "12px",
            fontSize: "0.75rem",
            fontWeight: "600",
            border: "none",
            cursor: guardando ? "not-allowed" : "pointer",
          }}
        >
          {estadoTexto}
        </button>

        {editando ? (
          <input
            type="text"
            className="task-input task-title-input"
            value={tituloEditado}
            onChange={(e) => setTituloEditado(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                guardarCambios();
              } else if (e.key === "Escape") {
                setTituloEditado(tarea.titulo);
                setEditando(false);
              }
            }}
            onBlur={guardarCambios}
            autoFocus
            disabled={guardando}
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
            onDoubleClick={iniciarEdicion}
            title="Doble clic para editar"
            style={{
              textDecoration: tarea.completada ? "line-through" : "none",
              color: tarea.completada ? "#94a3b8" : "inherit",
              cursor: guardando ? "default" : "pointer",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              flex: 1,
            }}
          >
            {tarea.titulo}
          </span>
        )}
      </div>

      <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
        <Button
          label={tarea.completada ? "Desmarcar" : "Completar"}
          onClick={handleToggle}
          variant={tarea.completada ? "success" : "primary"}
          disabled={guardando}
        />
        <Button
          label="Eliminar"
          onClick={() => onEliminar(tarea.id)}
          variant="danger"
          disabled={guardando}
        />
      </div>
    </li>
  );
};

export default TaskItem;
