import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, clearTasks } from "../../store/taskSlice";
import {
  ButtonDelete,
  ButtonDeleteAll,
  ButtonSubmit,
  FormContainer,
  HrForm,
  InputContainer,
  InputForm,
  ItemContainer,
  ListContainer,
  TitleForm,
  ErrorMessage,
} from "./styles"; // Asegúrate de agregar un estilo para el mensaje de error

const Form = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();

    if (!newTask.trim()) {
      setError("La tarea no puede estar vacía.");
      return;
    }

    const isDuplicate = tasks.some((task) => task.text.toLowerCase() === newTask.trim().toLowerCase());

    if (isDuplicate) {
      setError("La tarea ya existe en la lista.");
      return;
    }

    dispatch(addTask(newTask.trim()));
    setNewTask("");
    setError(""); // Limpiamos el mensaje de error al agregar correctamente
  };

  return (
    <FormContainer>
      <TitleForm> Nuctasks </TitleForm>

      <InputContainer>
        <InputForm
          type="text"
          placeholder="¿Qué tarea deseas agregar?"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <ButtonSubmit type="submit" onClick={handleAddTask}>
          Agregar
        </ButtonSubmit>
      </InputContainer>

      {error && <ErrorMessage>{error}</ErrorMessage>} {/* Mensaje de error en rojo */}

      <ListContainer>
        {tasks.map((task) => (
          <ItemContainer key={task.id}>
            <p>{task.text}</p>
            <ButtonDelete onClick={() => dispatch(deleteTask(task.id))}>Borrar</ButtonDelete>
          </ItemContainer>
        ))}
        {tasks.length > 0 && <HrForm />}
      </ListContainer>

      {tasks.length > 0 && (
        <ButtonDeleteAll onClick={() => dispatch(clearTasks())}>Borrar Todas</ButtonDeleteAll>
      )}
    </FormContainer>
  );
};

export default Form;
