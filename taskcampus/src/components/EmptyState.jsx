const EmptyState = ({ mensaje, icono }) => (
  <div className="empty-state" role="status">
    <span className="empty-state-icon" aria-hidden="true">{icono}</span>
    <p>{mensaje}</p>
  </div>
);

export default EmptyState;
