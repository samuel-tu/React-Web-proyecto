import Button from "./Button";
import Badge from "./Badge";
import { useState } from "react";
const TaskList = ({ tareas, onCompletar, onEliminar }) => {
    const [filtro, setFiltro] = useState("todas");
    const tareasFiltradas = tareas.filter((t) => {
        if (filtro === "pendientes") return !t.completada;
        if (filtro === "completadas") return t.completada;
        return true;
    });
    return (
        <div className="card">
            <h2 className="section-title">Listado de tareas</h2>
            {/*Botones de filtro*/}
            <div style={{display: "flex", gap: "8px", marginBottom: "12px"}}>
                <Button label="📑 Todas" onClick={() => setFiltro("todas")} variant = "primary">📑 Todas</Button>
                <Button label="⏳ Pendientes" onClick={() => setFiltro("pendientes")} variant = "primary">⏳ Pendientes</Button>
                <Button label="✅ Completadas" onClick={() => setFiltro("completadas")} variant = "primary">✅ Completadas</Button>
            </div>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {tareasFiltradas.map((tarea) => (
                    <li
                        key={tarea.id}
                        className="task-item"
                        style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <span
                            style={{
                                textDecoration: tarea.completada ? "line-through": "none",
                                color: tarea.completada ? "#94a3b8" : "inherit"
                            }}>
                            <Badge texto={tarea.completada ? "completada" : "pendiente"} />
                            &nbsp;&nbsp;&nbsp;
                            {tarea.titulo}
                        </span>

                        {tarea.completada ? (
                            <span>✅</span>
                        ) : (
                            <Button label="Completar" onClick={() => onCompletar(tarea.id)} variant="primary" />
                        )}
                        {/* Este botón activba el modal */}
                          <Button  label="Eliminar" onClick={() => onEliminar(tarea.id)} variant="danger" />
                    </li>
                ))}
            </ul>
            {/*Mensaje si no hay tareas en el filtro activo*/}
            {tareasFiltradas.length === 0 && (
                <p>No hay tareas en esta categoria.</p>
            )}
        </div>
    );
};

export default TaskList;