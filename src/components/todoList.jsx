import React, { useState } from "react";


const TodoList = () => {
  const [tasks, setTasks] = useState(["BreakFast","Lunch","Dinner"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if(newTask.trim()!==""){
      setTasks(t=>[...t,newTask]);
      setNewTask("");
    }
    
  }
  function deleteTask(index) {
const updateTasks=tasks.filter((_,i)=>i !== index);
setTasks(updateTasks);

  }
  function moveTaskUp(index) {

  }
  function moveTaskDown(index) {

  }
  return (
    <div className="flex justify-center items-center my-20">
      <div>
        <center className="text-3xl font-bold py-10 uppercase text-white">
          to-do-list
        </center>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a task"
          className="border-2 border-black rounded-md mr-2 h-10 sm:w-72 font-semibold pl-2"
        />
        <button className="w-20 h-10 mb-10 bg-blue-500 font-semibold rounded-md hover:bg-blue-400 text-white" onClick={addTask}>Add
        </button>

        <ol >
          {tasks.map((task, index) => 
            <li key={index} className="bg-white mb-2 rounded-md h-10 flex items-center justify-between w-72 sm:w-96 font-semibold pl-2">
              <span>{task}</span>
              <button className="w-20 h-10 bg-red-600 hover:bg-red-500 font-semibold rounded-md text-white" onClick={()=>deleteTask(index)}>Delete
              </button>
            </li>
          )}
        </ol>
      </div>{" "}
    </div>
  );
};

export default TodoList;
