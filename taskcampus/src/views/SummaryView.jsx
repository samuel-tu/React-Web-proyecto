import TaskSummary from "../components/TaskSummary";

const SummaryView = ({ total, completadas, pendientes, mostrando, filtroActual }) => {
  return (
    <div className="card">
      <h2 className="section-title">Resumen de tareas</h2>
      <TaskSummary
        total={total}
        completadas={completadas}
        pendientes={pendientes}
        mostrando={mostrando}
        filtroActual={filtroActual}
      />
    </div>
  );
};

export default SummaryView;