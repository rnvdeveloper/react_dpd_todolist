import "./styles/container-main.scss";

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import Header from "./components/Header";
import AddTaskContainer from "./components/AddTaskContainer/AddTaskContainer";
import TaskListContainer from "./components/TaskListContainer";
import TaskDetails from "./components/TaskDetails";


function App() {
  // Hooks
  const [tasks, setTasks] = useState([
    // Mock task
    // {
    //   id: 1,
    //   title: "Estudar ReackJS",
    //   completed: false,
    // }
  ]);

  useEffect(() => {
    const fetchTasks = async () => {
      const {data} = await axios.get(
        'https://jsonplaceholder.cypress.io/todos?_limit=10'
      )
      setTasks(data)
    }

    fetchTasks()
  }, [])


  // Handlers
  const handleTaskAddition = (taskTitle) => {
    const newTask = [
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
      ...tasks,
    ];
    setTasks(newTask);
  };

  const handleTaskDeletion = (taskId) => {
    const newTask = tasks.filter((task) => task.id !== taskId);
    setTasks(newTask);
  };

  const handleTaskStatus = (taskId) => {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    });

    setTasks(newTask);
  };


  // Screen display
  return (
    <BrowserRouter>
      <div className="container-main">
        <Header />
        <Routes>
          <Route 
            path="/" // Main route "Home"
            exact
            element={
              <>
                <AddTaskContainer handleTaskAddition={handleTaskAddition} />

                <TaskListContainer
                  task={tasks}
                  handleTaskStatus={handleTaskStatus}
                  handleTaskDeletion={handleTaskDeletion}
                />
              </>
            }
          />

          <Route
            path="/:taskTitle" // Show task details
            exact
            element={
              <>
                <TaskDetails />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
