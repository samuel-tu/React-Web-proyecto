import Button from "./Button";

const Navigation = ({ vistaActiva, onCambiarVista }) => {
  return (
    <nav className="nav-container" style={{ display: "flex", gap: "8px", justifyContent: "center", marginBottom: "1rem" }}>
      <Button
        label="Resumen"
        variant={vistaActiva === "resumen" ? "primary" : "secondary"}
        onClick={() => onCambiarVista("resumen")}
      />
      <Button
        label="Tareas"
        variant={vistaActiva === "tareas" ? "primary" : "secondary"}
        onClick={() => onCambiarVista("tareas")}
      />
      <Button
        label="Nueva Tarea"
        variant={vistaActiva === "nueva" ? "primary" : "secondary"}
        onClick={() => onCambiarVista("nueva")}
      />
    </nav>
  );
};

export default Navigation;