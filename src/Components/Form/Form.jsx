import React, { useState } from "react";
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
import { useTaskContext } from "../TodoList/TodoList";

const Form = () => {
  const { tasks, addTask, deleteTask, clearTasks } = useTaskContext();
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

    addTask(newTask.trim());
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
            <ButtonDelete onClick={() => deleteTask(task.id)}>Borrar</ButtonDelete>
          </ItemContainer>
        ))}
        {tasks.length > 0 && <HrForm />}
      </ListContainer>

      {tasks.length > 0 && (
        <ButtonDeleteAll onClick={clearTasks}>Borrar Todas</ButtonDeleteAll>
      )}
    </FormContainer>
  );
};

export default Form;
