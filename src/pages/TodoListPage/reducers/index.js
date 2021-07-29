import { handleActions } from "redux-actions";
import { v4 as uuid4 } from "uuid";

import * as actions from "../actions";

const defaultState = {
  tasks: [],
};

const todoListReducer = handleActions(
  {
    [actions.ADD_TASK]: (state, { payload }) => {
      const updatedState = [
        ...state.tasks,
        {
          id: uuid4(),
          taskText: payload,
          taskTextBeforeEditing: "",
          isTaskDone: false,
          isEditMode: false,
        },
      ];

      return {
        tasks: updatedState,
      };
    },
    [actions.TOGGLE_TASK_COMPLETENESS]: (state, { payload }) => {
      const taskListCopy = [...state.tasks];
      const index = payload;
      const task = taskListCopy[index];

      task.isTaskDone = !task.isTaskDone;

      return {
        ...state,
        tasks: taskListCopy,
      };
    },
    [actions.TURN_ON_TASK_EDIT_MODE]: (state, { payload }) => {
      const taskListCopy = [...state.tasks];
      const index = payload;
      const task = taskListCopy[index];

      task.taskTextBeforeEditing = task.taskText;
      task.isEditMode = true;

      return {
        ...state,
        tasks: taskListCopy,
      };
    },
    [actions.SAVE_EDITED_TASK]: (state, { payload }) => {
      const taskListCopy = [...state.tasks];
      const index = payload;
      const task = taskListCopy[index];

      task.isEditMode = false;

      return {
        ...state,
        tasks: taskListCopy,
      };
    },
    [actions.CHANGE_TASK_VALUE]: (state, { payload }) => {
      const taskListCopy = [...state.tasks];
      const { index, value } = payload;
      const task = taskListCopy[index];

      task.taskText = value;

      return {
        ...state,
        tasks: taskListCopy,
      };
    },
    [actions.CANCEL_SAVING_EDITS]: (state, { payload }) => {
      const taskListCopy = [...state.tasks];
      const index = payload;
      const task = taskListCopy[index];

      task.taskText = task.taskTextBeforeEditing;
      task.isEditMode = false;

      return {
        ...state,
        tasks: taskListCopy,
      };
    },
    [actions.DELETE_TASK]: (state, { payload }) => {
      const stateCopy = [...state.tasks];
      const index = payload;

      const updatedState = [
        ...stateCopy.slice(0, index),
        ...stateCopy.slice(index + 1),
      ];

      return {
        ...state,
        tasks: updatedState,
      };
    },
  },
  defaultState
);

export default todoListReducer;
