import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  tasks: [],
};

const todoListReducer = handleActions(
  {
    [actions.ADD_TASK]: (state, action) => {
      const event = action.payload;
      console.log(event);
      event.preventDefault();
      const updatedState = [...state.tasks, { taskText: "asasa" }];
      console.log(updatedState);

      return {
        ...state,
        tasks: updatedState,
      };
    },
  },
  defaultState
);

export default todoListReducer;
