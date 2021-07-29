import { handleActions } from "redux-actions";
import { v4 as uuid4 } from "uuid";

import * as actions from "../actions";

const defaultState = {
  tasks: [],
};

const todoListReducer = handleActions(
  {
    [actions.ADD_TASK]: (state, action) => {
      const updatedState = [
        ...state.tasks,
        {
          id: uuid4(),
          taskText: action.payload,
          taskTextBeforeEditing: "",
          isTaskDone: false,
          isEditMode: false,
        },
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
    [actions.TURN_ON_TASK_EDIT_MODE]: (state, action) => {
      const updatedState = [...state.tasks];
      const index = action.payload;

      updatedState[index].taskTextBeforeEditing = updatedState[index].taskText;
      updatedState[index].isEditMode = true;

      return {
        ...state,
        tasks: updatedState,
      };
    },
    [actions.SAVE_EDITED_TASK]: (state, action) => {
      const updatedState = [...state.tasks];
      const index = action.payload;

      updatedState[index].isEditMode = false;

      return {
        ...state,
        tasks: updatedState,
      };
    },
    [actions.CHANGE_TASK_VALUE]: (state, action) => {
      const updatedState = [...state.tasks];
      const { index, value } = action.payload;

      updatedState[index].taskText = value;

      return {
        ...state,
        tasks: updatedState,
      };
    },
    [actions.CANCEL_SAVING_EDITS]: (state, action) => {
      const updatedState = [...state.tasks];
      const index = action.payload;

      updatedState[index].taskText = updatedState[index].taskTextBeforeEditing;
      updatedState[index].isEditMode = false;

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
