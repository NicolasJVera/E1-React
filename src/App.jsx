import Form from "./Components/Form/Form"
import { GlobalStyles } from "./Components/GlobalStyles"
import { TaskProvider } from "./Components/TodoList/TodoList"

function App() {
  

  return (
    <>
    <TaskProvider>
      <Form />
    </TaskProvider>
     <GlobalStyles />
    </>
  )
}

export default App
