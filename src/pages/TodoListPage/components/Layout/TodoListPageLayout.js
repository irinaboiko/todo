import React from "react";
import PropTypes from "prop-types";
import { v4 as uuid4 } from "uuid";

import TaskView from "../TaskView/TaskView";
import styles from "./style.module.scss";
import TaskCreationForm from "../TaskCreationForm/TaskCreationForm";

const TodoListLayout = ({
  tasks,
  handleTaskDone,
  formValues,
  handleChange,
  handleTaskAdd,
  handleDeleteTask,
  isAddButtonDisabled,
}) => {
  return (
    <>
      <TaskCreationForm
        formValues={formValues}
        handleChange={handleChange}
        handleTaskAdd={handleTaskAdd}
        isAddButtonDisabled={isAddButtonDisabled}
      />
      <div className={styles.tasksWrapper}>
        {tasks.map((task, index) => (
          <TaskView
            handleTaskDone={() => handleTaskDone(index)}
            handleDeleteTask={() => handleDeleteTask(index)}
            taskText={task.taskText.taskText}
            isTaskDone={task.isTaskDone}
            key={uuid4()}
          />
        ))}
      </div>
    </>
  );
};

TodoListLayout.propTypes = {};

export default TodoListLayout;
