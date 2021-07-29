import React, { useMemo } from "react";
import { useCallback } from "react";
import { useForm } from "../../../hooks";

import TaskCreationForm from "../components/TaskCreationForm/TaskCreationForm";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_TASK,
  CANCEL_SAVING_EDITS,
  CHANGE_TASK_VALUE,
  DELETE_TASK,
  DONE_TASK,
  SAVE_EDITED_TASK,
  TURN_ON_TASK_EDIT_MODE,
} from "../actions";
import todoListPage from "../reducers";
import TodoListLayout from "../components/Layout/TodoListPageLayout";

const TodoListContainer = () => {
  const [formValues, setFormValues, handleChange] = useForm({
    taskText: "",
  });

  const dispatch = useDispatch();

  const { tasks } = useSelector((state) => state.todoListPage);

  const handleTaskAdd = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(ADD_TASK(formValues.taskText));

      setFormValues({
        ...formValues,
        taskText: "",
      });
    },
    [formValues]
  );

  const handleTaskDone = useCallback(
    (index) => {
      dispatch(DONE_TASK(index));
    },
    [formValues]
  );

  const handleEditTask = useCallback(
    (index) => {
      dispatch(TURN_ON_TASK_EDIT_MODE(index));
    },
    [formValues]
  );

  const handleTaskChange = useCallback(({ index, value }) => {
    dispatch(CHANGE_TASK_VALUE({ index, value }));
  }, []);

  const handleSaveEdits = useCallback(
    (index) => {
      dispatch(SAVE_EDITED_TASK(index));
    },
    [dispatch]
  );

  const handleCancelSavingEdits = useCallback(
    (index) => {
      dispatch(CANCEL_SAVING_EDITS(index));
    },
    [dispatch]
  );

  const handleDeleteTask = useCallback(
    (index) => {
      dispatch(DELETE_TASK(index));
    },
    [dispatch]
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
        handleEditTask={handleEditTask}
        handleTaskChange={handleTaskChange}
        handleSaveEdits={handleSaveEdits}
        handleCancelSavingEdits={handleCancelSavingEdits}
        handleDeleteTask={handleDeleteTask}
        formValues={formValues}
        handleChange={handleChange}
        isAddButtonDisabled={isAddButtonDisabled}
      />
    </>
  );
};

export default TodoListContainer;
