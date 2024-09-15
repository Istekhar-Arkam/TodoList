import React, { useState } from "react";


const TodoList = () => {
  const [tasks, setTasks] = useState(["Fazar Salah", "breakfast", "study"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    
  }
  function deleteTask(index) {

  }
  function moveTaskUp(index) {

  }
  function moveTaskDown(index) {

  }
  return (
    <div className="border-2 border-red-600 flex justify-center items-center">
      <div className="border-2 border-green-500">
        <center className="text-3xl font-bold py-10 uppercase">
          to-do-list
        </center>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a task"
          className="border-2 border-black rounded-lg mr-2"
        />
        <button className="w-20 bg-blue-400 font-semibold rounded-lg">Add
        </button>

        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span>{task}</span>
              <button className="w-20 bg-blue-400 font-semibold rounded-lg float-right">Delete
              </button>
            </li>
          ))}
        </ol>
      </div>{" "}
    </div>
  );
};

export default TodoList;
