const colorMap = {
    pendiente: "#f59e0b",
    completada: "#16a34a",
    en_progreso: "#2563eb",
};

const Badge = ({ texto, onClick }) => {
    const color = colorMap[texto] || "#6b7280";

    const style = {
        backgroundColor: color,
        color: "#fff",
        padding: "2px 10px",
        borderRadius: "12px",
        fontSize: "0.75rem",
        fontWeight: "600",
        border: "none",
        fontFamily: "inherit",
        cursor: onClick ? "pointer" : "default",
    };

    if (onClick) {
        return (
            <button
                type="button"
                onClick={onClick}
                style={style}
                aria-label={`Cambiar estado de la tarea (${texto})`}
            >
                {texto}
            </button>
        );
    }

    return (
        <span
            style={style}
        >
            {texto}
        </span>
    );
};

export default Badge;