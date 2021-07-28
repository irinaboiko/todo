import React, { useMemo } from "react";
import { useCallback } from "react";
import { useForm } from "../../../hooks";

import TaskCreationForm from "../components/TaskCreationForm/TaskCreationForm";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TASK, DELETE_TASK, DONE_TASK } from "../actions";
import todoListPage from "../reducers";
import TodoListLayout from "../components/Layout/TodoListPageLayout";

const TodoListContainer = () => {
  const [formValues, handleChange, clearInput] = useForm({
    taskText: "",
  });

  const dispatch = useDispatch();

  const { tasks } = useSelector((state) => state.todoListPage);

  const handleTaskAdd = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(ADD_TASK(formValues));
    },
    [formValues]
  );

  const handleTaskDone = useCallback(
    (index) => {
      dispatch(DONE_TASK(index));
    },
    [formValues]
  );

  const handleDeleteTask = useCallback(
    (index) => {
      dispatch(DELETE_TASK(index));
    },
    [formValues]
  );

  const isAddButtonDisabled = useMemo(() => {
    return formValues.taskText === "";
  }, [formValues]);

  return (
    <>
      <TodoListLayout
        tasks={tasks}
        handleTaskAdd={handleTaskAdd}
        handleTaskDone={handleTaskDone}
        handleDeleteTask={handleDeleteTask}
        formValues={formValues}
        handleChange={handleChange}
        isAddButtonDisabled={isAddButtonDisabled}
      />
    </>
  );
};

export default TodoListContainer;
