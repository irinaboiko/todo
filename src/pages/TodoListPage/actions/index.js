import { createAction } from "redux-actions";

export const ADD_TASK = createAction("ADD_TASK");
export const TOGGLE_TASK_COMPLETENESS = createAction(
  "TOGGLE_TASK_COMPLETENESS"
);
export const TURN_ON_TASK_EDIT_MODE = createAction("TURN_ON_TASK_EDIT_MODE");
export const CHANGE_TASK_VALUE = createAction("CHANGE_TASK_VALUE");
export const SAVE_EDITED_TASK = createAction("SAVE_EDITED_TASK");
export const CANCEL_SAVING_EDITS = createAction("CANCEL_SAVING_EDITS");
export const DELETE_TASK = createAction("DELETE_TASK");
