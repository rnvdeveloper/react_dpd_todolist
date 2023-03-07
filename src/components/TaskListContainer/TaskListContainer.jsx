import Task from "../Task";

const TaskListContainer = ({ task, handleTaskStatus, handleTaskDeletion}) => {
   return (
      <>
         {task.map((task) => (
         <Task
         key={task.id}
         task={task}
         handleTaskStatus={handleTaskStatus}
         handleTaskDeletion={handleTaskDeletion} />
         ))}
      </>
   );
};

export default TaskListContainer;
