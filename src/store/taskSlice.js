import { createSlice } from '@reduxjs/toolkit';

const loadTasksFromStorage = () => {
  const savedTasks = localStorage.getItem('tasks');
  return savedTasks ? JSON.parse(savedTasks) : [];
};

const saveTasksToStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const initialState = {
  tasks: loadTasksFromStorage(),
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ id: Date.now(), text: action.payload });
      saveTasksToStorage(state.tasks);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      saveTasksToStorage(state.tasks);
    },
    clearTasks: (state) => {
      state.tasks = [];
      saveTasksToStorage(state.tasks);
    },
  },
});

export const { addTask, deleteTask, clearTasks } = taskSlice.actions;
export default taskSlice.reducer; 