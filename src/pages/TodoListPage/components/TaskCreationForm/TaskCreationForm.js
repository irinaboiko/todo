import React from "react";
import PropTypes from "prop-types";

import styles from "./style.module.scss";

const TaskCreationForm = ({
  formValues,
  handleChange,
  handleTaskAdd,
  isAddButtonDisabled,
}) => {
  return (
    <form onSubmit={handleTaskAdd}>
      <div className={styles.inputGroup}>
        <label className={styles.label}>
          <p className={styles.inputTitle}>What you need to do?</p>
          <input
            className={styles.input}
            value={formValues.taskText}
            onChange={handleChange}
            name="taskText"
            type="text"
          />
        </label>
        <button
          className={styles.addButton}
          disabled={isAddButtonDisabled}
          role="submit"
        >
          +
        </button>
      </div>
    </form>
  );
};

TaskCreationForm.propTypes = {};

export default TaskCreationForm;
