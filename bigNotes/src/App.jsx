import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import {v4} from 'uuid';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Estudar React para se tornar um desenvolvedor React",
      isCompleted: false,
    },
  ]);


  function onTaskClick(taskId){
    const newTasks = tasks.map(task => {
      if(task.id === taskId){
        return{...task,isCompleted: !task.isCompleted}
      }


      return task;
    });

    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId){
    const newTasks = tasks.filter(task => task.id !== taskId);

    setTasks(newTasks);
  }

  function onAddTaskSubmit(title,description){
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    }
    setTasks([...tasks, newTask]);
    console.log(title)
  }

  return (
    <div className="w-screen h-screen bg-black text-white flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl font-bold text-center">Big Notes</h1>
        <AddTasks onAddTaskSubmit = {onAddTaskSubmit}/>
        <Tasks tasks = {tasks} onTaskClick= {onTaskClick} onDeleteTaskClick = {onDeleteTaskClick}/>
      </div>
    </div>
  );
}

export default App;
