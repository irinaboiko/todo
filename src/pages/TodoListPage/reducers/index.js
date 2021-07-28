import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  tasks: [],
};

const todoListReducer = handleActions(
  {
    [actions.ADD_TASK]: (state, action) => {
      const updatedState = [
        ...state.tasks,
        { taskText: action.payload, isTaskDone: false },
      ];

      return {
        ...state,
        tasks: updatedState,
      };
    },
    [actions.DONE_TASK]: (state, action) => {
      const updatedState = [...state.tasks];
      const index = action.payload;

      updatedState[index].isTaskDone = !updatedState[index].isTaskDone;

      return {
        ...state,
        tasks: updatedState,
      };
    },
    [actions.DELETE_TASK]: (state, action) => {
      const stateCopy = [...state.tasks];
      const index = action.payload;

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
