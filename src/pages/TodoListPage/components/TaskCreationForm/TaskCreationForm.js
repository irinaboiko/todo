import React from "react";
import PropTypes from "prop-types";

const TaskCreationForm = ({ formValues, handleChange, handleTaskAdd }) => {
  return (
    <form onSubmit={handleTaskAdd}>
      <label>
        <p>What you need to do?</p>
        <input
          value={formValues.taskText}
          onChange={handleChange}
          name="taskText"
          type="text"
        />
      </label>
      <button role="submit">Add</button>
    </form>
  );
};

TaskCreationForm.propTypes = {};

export default TaskCreationForm;
