import './TaskDetails.scss'

import { useParams, useNavigate } from "react-router-dom";

import Button from "../Button";


const TaskDetails = () => {
   const params = useParams()
   const navigate = useNavigate()
   const handleBackButtonClick = () => {
      navigate('/')
   }

   return ( 
      <>
         <div className="back-button-container">
            <Button onClick={handleBackButtonClick}>Back to list</Button>
         </div>
         <div className="task-details-container">
            <h2>{params.taskTitle}</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem magni animi, quod culpa laudantium vel veniam sit dolor unde aut beatae recusandae explicabo. Pariatur consequatur dolores perspiciatis suscipit at fugit!</p>
         </div>
      </>
   );
}

export default TaskDetails;