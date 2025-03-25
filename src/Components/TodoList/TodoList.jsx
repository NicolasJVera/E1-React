// TaskContext.js
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, clearTasks } from "../../store/taskSlice";

const TodoList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleAddTask = (text) => {
    dispatch(addTask(text));
  };
  
  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id))
  };

  const handleClearTasks = () => {
    dispatch(clearTasks())
  };

  return (
    <>
      <h1>Lista de Tareas</h1> 
      <form onSubmit={(e) => {
        e.preventDefault();
        const text = e.target.text.value;
        if (text.trim()) {
          handleAddTask(text);
          e.target.reset();
        }
      }}>
        <input type="text" name="text" placeholder="Nueva Tarea" />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <button onClick={handleClearTasks}>Limpiar todas</button>
    </>
  );
};

export default TodoList;
