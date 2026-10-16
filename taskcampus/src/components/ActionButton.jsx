function ActionButton({ onReview }) {
  return (
    <section>
      <h2>Acciones</h2>
      <Button 
        onClick={onReview} 
        className="task-button"
      >
        Revisar tareas
      </Button>
    </section>
  );
}

export default ActionButton;