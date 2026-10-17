
import { useState } from "react";

const TaskSummary = ({ total, completadas, pendientes }) => {
    const resumen = [
        { cantidad: total, etiqueta: "Total", color: "total" },
        { cantidad: completadas, etiqueta: "Completadas", color: "completadas" },
        { cantidad: pendientes, etiqueta: "Pendientes", color: "pendientes" },
    ];

    return (
        <div className="task-summary">
            {resumen.map(({ cantidad, etiqueta, color }) => (
                <div className="task-summary-item" key={color}>
                    <strong className={`task-summary-count task-summary-count-${color}`}>
                        {cantidad}
                    </strong>
                    <span>{etiqueta}</span>
                </div>
            ))}
        </div>
    );
};

export default TaskSummary;