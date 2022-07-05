import React, { useState } from "react";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";

ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "Code",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState("all");

  const handleTodoClick = (todo, index) => {
    //clone current array to the new one
    const newTodoList = [...todoList];

    // toggle state
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === "new" ? "completed" : "new",
    };

    // update todoList
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setFilteredStatus("all");
  };

  const handleShowCompletedClick = () => {
    setFilteredStatus("completed");
  };

  const handleShowNewClick = () => {
    setFilteredStatus("new");
  };
  const handleToDoFormSubmit = (value) => {
    console.log("submit", value);
  };

  const renderTodoList = todoList.filter((todo) => filteredStatus === "all" || filteredStatus === todo.status);
  return (
    <div>
      <h3>What Todo Form</h3>
      <TodoForm onSubmit={handleToDoFormSubmit}></TodoForm>

      <h3>Todo list</h3>
      <h4>{filteredStatus}</h4>
      <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick}></TodoList>
      <button onClick={handleShowAllClick}>Show All</button>
      <button onClick={handleShowCompletedClick}>Show Completed</button>
      <button onClick={handleShowNewClick}>Show New</button>
    </div>
  );
}

export default ListPage;
