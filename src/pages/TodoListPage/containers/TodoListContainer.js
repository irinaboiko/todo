import React from "react";
import { useCallback } from "react";
import { useForm } from "../../../hooks";

import TaskCreationForm from "../components/TaskCreationForm/TaskCreationForm";
import TasksList from "../components/TasksList/TasksList";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TASK } from "../actions";
import todoListPage from "../reducers";

const TodoListContainer = () => {
  const [formValues, handleChange] = useForm({
    taskText: "",
  });

  const dispatch = useDispatch();

  const { tasks } = useSelector((state) => state.todoListPage);

  const handleTaskAdd = useCallback(
    (event) => {
      dispatch(ADD_TASK(event));
    },
    [dispatch]
  );

  return (
    <>
      <TaskCreationForm
        tasks={tasks}
        formValues={formValues}
        handleChange={handleChange}
        //handleSubmit={handleSubmit}
        handleTaskAdd={handleTaskAdd}
      />
      <TasksList tasks={tasks} formValues={formValues} />
    </>
  );
};

export default TodoListContainer;
