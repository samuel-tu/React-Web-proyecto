import TaskForm from "../components/TaskForm";

const NewTaskView = ({ onAgregar }) => {
  return (
    <TaskForm onAgregar={onAgregar} />
  );
};

export default NewTaskView;