// import { motion } from "framer-motion";
import React, { useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import './Todoitem.css'
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  return (
    <li
      key={item.id}
      className="card"
      style={{ transform: `translateX(0)` }} // remove animations
    >
      <textarea
        ref={inputRef}
        disabled={inputRef.current}
        defaultValue={` ${item.item.todo} ${item.item.description}  ${item.item.dueDate}`}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className="btns ">
        <button onClick={() => changeFocus()} >
          <AiFillEdit /> Edit
        </button>
        {!item.completed && (
          <button style={{ color: "green" }} onClick={() => completeTodo(item.id)}>
            <IoCheckmarkDoneSharp /> Complete
          </button>
        )}
        <button style={{ color: "red" }} onClick={() => removeTodo(item.id)}>
          <IoClose /> Remove
        </button>
      </div>
      {item.completed && <span className="completed">done</span>}
    </li>
  );
};



export default TodoItem;
