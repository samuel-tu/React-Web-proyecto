import { useState, useEffect } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Modal from "./components/Modal";
import TaskSummary from "./components/TaskSummary";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./App.css";

const App = () => {
    const [tareas, setTareas] = useState(() => {
      const guardadas = localStorage.getItem("taskcampus-tareas");
      return guardadas
        ? JSON.parse(guardadas): [];
    });
    
    const [tareaAEliminar, setTareaAEliminar] = useState(null);
    const handleEliminar = () => {
      setTareas((prev) => prev.filter((t) => t.id !== tareaAEliminar));
      setTareaAEliminar(null);
    };

    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);


    //Efecto 1
    useEffect(() => {
      const cargarDesdeAPI = async () => {
        setCargando(true);
        try{
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos?_limit=10"
          );
          if (!response.ok) throw new Error('Error HTTP: ${response.status}');
          const data = await response.json();
          const tareasAdaptadas = data.map((item) => ({
            id: item.id,
            titulo: item.title,
            completada: item.completed,
          }));
          setTareas(tareasAdaptadas);
        }catch(err){
          setError(err.message);
        }finally{
          setCargando(false);
        }
      };
      cargarDesdeAPI();
    }, []);

    //Efecto 2
    useEffect(() => {
      localStorage.setItem("taskcampus-tareas", JSON.stringify(tareas));
    }, [tareas]);
    //Efecto 3
    useEffect(() => {
      const pendientes = tareas.filter((t) => !t.completada).length;
      document.title = 'TaskCampus (${pendientes} pendientes)'
    }, [tareas]);
    //Efecto 4
    useEffect(() => {
      const timer = setInterval(() => {
        console.log("TaskCampus activo");
      }, 5000);
      return () => clearInterval(timer);
    }, []);
    //Funcion 1
    const agregarTarea = async (titulo) => {
      const nuevaTarea = {id: Date.now(), titulo, completada: false };
      setTareas([...tareas, nuevaTarea]);
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
          method: "POST",
          headers: {"Content-Type": "apllication/json"},
          body: JSON.stringify({title: titulo, completed: false, userId: 1}),
        });
        const data = await response.json();
        console.log("Tareas creada en servidor:", data);
      }catch{
        console.error("Error al crear tarea en servidor:", err);
      }
    };
    //Funcion 2
    const completarTarea = (id) => {
        setTareas((tareasActuales) =>
            tareasActuales.map((tarea) =>
                tarea.id === id
                    ? { ...tarea, completada: true }
                    : tarea
            )
        );
    };

    return (
        <div className="app-container">
            <Header title="TaskCampus" description="Gestor de tareas académicas"/>
            <Card titulo="Resumen de tareas">
                <TaskSummary total={tareas.length}/>
            </Card>
            <TaskForm onAgregar={agregarTarea}/> 
            <Card titulo="Mis tareas">
              <TaskList tareas={tareas} onCompletar={completarTarea} onEliminar={setTareaAEliminar} cargando={cargando} error={error}/>
            </Card>
            
            <Modal
              visible={tareaAEliminar !== null}
              mensaje="¿Estas seguro de que deseas eliminar esta tarea?"
              onConfirmar={handleEliminar}
              onCancelar={() => setTareaAEliminar(null)}/>
        </div>
    );
};



export default App;