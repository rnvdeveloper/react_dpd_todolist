import "./Task.scss";

import { useNavigate } from "react-router-dom";
import { CgClose, CgInfo } from "react-icons/cg";

const Task = ({ task, handleTaskStatus, handleTaskDeletion }) => {
      const navigate = useNavigate()
      const handleTaskDetailsClick = () => {
         navigate(`/${task.title}`)
      }

   return (
      <div
         className="task-container"
         style={task.completed ? { borderLeft: "6px solid #7fff00" } : {borderLeft: "6px solid #ff0000"}}
      >
         <div className="task-title" onClick={() => handleTaskStatus(task.id)}>
         {task.title}
         </div>

         <div className="buttons-container">
            <button 

            className="see-task-details-button"
               onClick={handleTaskDetailsClick}
               >
                  <CgInfo />
            </button>
            
            <button className="remove-task-button"
               onClick={() => handleTaskDeletion(task.id)}
            >
               <CgClose />
            </button>
         </div>
      </div>
   );
};

export default Task;
