import React, { useState } from "react";

const FormTodo = (props) => {
  const { handleAddItem } = props; //(C-1)
  const [description, setDescription] = useState(""); // (F-1)
  const handleSubmit = (e) => {
    e.preventDefault(); // (E)
    // (C-2)
    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      description,
    });
    setDescription(""); // (B)
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="todo-list">
        <div className="file-input">
          <input
            type="text"
            className="text"
            id="textForm"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button
            className="button pink"
            id="addList"
            disabled={description ? "" : "disabled"}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormTodo;
