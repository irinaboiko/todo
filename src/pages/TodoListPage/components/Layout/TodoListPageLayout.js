import React from "react";
import PropTypes from "prop-types";

import TaskView from "../TaskView/TaskView";
import styles from "./style.module.scss";
import TaskCreationForm from "../TaskCreationForm/TaskCreationForm";

const TodoListLayout = ({
  tasks,
  handleTaskDone,
  formValues,
  handleChange,
  handleTaskAdd,
  handleEditTask,
  handleTaskChange,
  handleSaveEdits,
  handleCancelSavingEdits,
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
            key={task.id}
            taskText={task.taskText}
            isTaskDone={task.isTaskDone}
            isEditMode={task.isEditMode}
            handleTaskDone={() => handleTaskDone(index)}
            handleEditTask={() => handleEditTask(index)}
            handleTaskChange={(event) =>
              handleTaskChange({ index: index, value: event.target.value })
            }
            handleSaveEdits={() => handleSaveEdits(index)}
            handleCancelSavingEdits={() => handleCancelSavingEdits(index)}
            handleDeleteTask={() => handleDeleteTask(index)}
          />
        ))}
      </div>
    </>
  );
};

TodoListLayout.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      isEditMode: PropTypes.bool,
      isTaskDone: PropTypes.bool,
      taskText: PropTypes.string,
      taskTextBeforeEditing: PropTypes.string,
    })
  ),
  handleTaskDone: PropTypes.func.isRequired,
  formValues: PropTypes.shape({
    taskText: PropTypes.string.isRequired,
  }),
  handleChange: PropTypes.func.isRequired,
  handleTaskAdd: PropTypes.func.isRequired,
  handleEditTask: PropTypes.func.isRequired,
  handleTaskChange: PropTypes.func.isRequired,
  handleSaveEdits: PropTypes.func.isRequired,
  handleCancelSavingEdits: PropTypes.func.isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
  isAddButtonDisabled: PropTypes.bool.isRequired,
};

export default TodoListLayout;
