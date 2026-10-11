
import { useState } from "react";

const TaskSummary = ({ onSeleccionar }) => {
    const [completadas, setCompletadas] = useState(0);

    const marcarCompletadas = () => {
        setCompletadas(completadas + 1);
    };

    return (
        <div className="card">
            <h2 className="section-title">Resumen de Tareas</h2>

            <p>
                Tareas completadas: <strong>{completadas}</strong>
            </p>

            <button
                onClick={marcarCompletadas}
                className="task-button"
            >
                Marcar como completada
            </button>
        </div>
    );
};

export default TaskSummary;