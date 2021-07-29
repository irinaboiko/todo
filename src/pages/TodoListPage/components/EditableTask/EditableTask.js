import React from "react";
import PropTypes from "prop-types";

import styles from "./style.module.scss";

const EditableTask = ({
  taskText,
  handleTaskChange,
  handleSaveEdits,
  handleCancelSavingEdits,
}) => {
  const isEditTextEmpty = taskText === "";

  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.editTask}
        onChange={handleTaskChange}
        value={taskText}
        type="text"
      />
      <button disabled={isEditTextEmpty} onClick={handleSaveEdits}>
        <svg
          id="bold"
          height="13"
          viewBox="0 0 24 24"
          width="13"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d="m9.707 19.121c-.187.188-.442.293-.707.293s-.52-.105-.707-.293l-5.646-5.647c-.586-.586-.586-1.536 0-2.121l.707-.707c.586-.586 1.535-.586 2.121 0l3.525 3.525 9.525-9.525c.586-.586 1.536-.586 2.121 0l.707.707c.586.586.586 1.536 0 2.121z" />
          </g>
        </svg>
      </button>
      <button onClick={handleCancelSavingEdits}>
        <svg
          height="13pt"
          viewBox="-32 0 512 512"
          width="13pt"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m192 512c-68.394531 0-132.671875-26.625-181.035156-74.988281-4.160156-4.160157-4.160156-10.921875 0-15.082031 4.160156-4.160157 10.921875-4.160157 15.082031 0 44.332031 44.332031 103.277344 68.738281 165.953125 68.738281s121.601562-24.40625 165.929688-68.738281c44.332031-44.328126 68.738281-103.253907 68.738281-165.929688s-24.40625-121.621094-68.738281-165.953125c-44.328126-44.328125-103.253907-68.714844-165.929688-68.714844s-121.601562 24.40625-165.929688 68.738281c-4.160156 4.160157-10.921874 4.160157-15.082031 0-4.160156-4.160156-4.160156-10.921874 0-15.082031 48.359375-48.363281 112.636719-74.988281 181.011719-74.988281 68.394531 0 132.671875 26.625 181.035156 74.988281 48.363282 48.359375 74.964844 112.636719 74.964844 181.011719s-26.625 132.652344-74.988281 181.011719c-48.359375 48.363281-112.636719 74.988281-181.011719 74.988281zm0 0" />
          <path d="m96 106.667969h-85.332031c-5.890625 0-10.667969-4.78125-10.667969-10.667969v-85.332031c0-5.890625 4.777344-10.667969 10.667969-10.667969 5.886719 0 10.664062 4.777344 10.664062 10.667969v74.664062h74.667969c5.886719 0 10.667969 4.78125 10.667969 10.667969s-4.78125 10.667969-10.667969 10.667969zm0 0" />
        </svg>
      </button>
    </div>
  );
};

EditableTask.propTypes = {
  taskText: PropTypes.string.isRequired,
  handleTaskChange: PropTypes.func.isRequired,
  handleSaveEdits: PropTypes.func.isRequired,
  handleCancelSavingEdits: PropTypes.func.isRequired,
};

export default EditableTask;
