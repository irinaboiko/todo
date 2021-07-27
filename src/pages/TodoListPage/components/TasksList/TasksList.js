import React from "react";
import PropTypes from "prop-types";
import { v4 as uuid4 } from "uuid";

import TaskView from "../TaskView/TaskView";

const TasksList = ({ tasks }) => {
  //console.log(formValues);
  return (
    <div>
      {tasks.map((task) => (
        <TaskView key={uuid4()} />
      ))}
    </div>
  );
};

TasksList.propTypes = {};

export default TasksList;
