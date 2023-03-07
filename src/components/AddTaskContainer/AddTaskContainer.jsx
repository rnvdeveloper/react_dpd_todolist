import "./AddTaskContainer.scss";

import { useState } from "react";

import Button from "../Button";

const AddTaskContainer = ({ handleTaskAddition }) => {
   const [inputData, setInputData] = useState("");

   const handleInputChange = (e) => {
      setInputData(e.target.value);
   };

   const handleAddTaskButton = () => {
      if (inputData === '') {
         return alert("You need to insert a name/description for your task!");
      }

      handleTaskAddition(inputData);
      setInputData("");
   };

   return (
      <div className="add-task-container">
         <input
         onChange={handleInputChange}
         value={inputData}
         className="add-task-input"
         type="text"
         placeholder="Insert your new task name/description"
         />

         <div className="add-task-button-container">
         <Button onClick={handleAddTaskButton}>Add Task</Button>
         </div>
      </div>
   );
};

export default AddTaskContainer;
