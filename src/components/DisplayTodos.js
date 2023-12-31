// import React, { useState } from "react";
// import { connect } from "react-redux";
// import {
//   addTodos,
//   completeTodos,
//   removeTodos,
//   updateTodos,
// } from "../redux/reducer";
// import TodoItem from "./TodoItem";
// import { AnimatePresence, motion } from "framer-motion";

// const mapStateToProps = (state) => {
//   return {
//     todos: state,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTodo: (obj) => dispatch(addTodos(obj)),
//     removeTodo: (id) => dispatch(removeTodos(id)),
//     updateTodo: (obj) => dispatch(updateTodos(obj)),
//     completeTodo: (id) => dispatch(completeTodos(id)),
//   };
// };

// const DisplayTodos = (props) => {
//   const [sort, setSort] = useState("active");
//   return (
//     <div className="displaytodos">
//       <div className="buttons">
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={() => setSort("active")}
//         >
//           Active
//         </motion.button>
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={() => setSort("completed")}
//         >
//           Completed
//         </motion.button>
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={() => setSort("all")}
//         >
//           All
//         </motion.button>
//       </div>
//       <ul>
//         <AnimatePresence>
//           {props.todos.length > 0 && sort === "active"
//             ? props.todos.map((item) => {
//                 return (
//                   item.completed === false && (
//                     <TodoItem
//                       key={item.id}
//                       item={item}
//                       removeTodo={props.removeTodo}
//                       updateTodo={props.updateTodo}
//                       completeTodo={props.completeTodo}
//                     />
//                   )
//                 );
//               })
//             : null}
//           {/* for completed items */}
//           {props.todos.length > 0 && sort === "completed"
//             ? props.todos.map((item) => {
//                 return (
//                   item.completed === true && (
//                     <TodoItem
//                       key={item.id}
//                       item={item}
//                       removeTodo={props.removeTodo}
//                       updateTodo={props.updateTodo}
//                       completeTodo={props.completeTodo}
//                     />
//                   )
//                 );
//               })
//             : null}
//           {/* for all items */}
//           {props.todos.length > 0 && sort === "all"
//             ? props.todos.map((item) => {
//                 return (
//                   <TodoItem
//                     key={item.id}
//                     item={item}
//                     removeTodo={props.removeTodo}
//                     updateTodo={props.updateTodo}
//                     completeTodo={props.completeTodo}
//                   />
//                 );
//               })
//             : null}
//         </AnimatePresence>
//       </ul>
//     </div>
//   );
// };

// export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);


import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  completeTodos,
  removeTodos,
  updateTodos,
} from "../redux/reducer";
import TodoItem from "./TodoItem";
import './DisplayTodos.css'
const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const DisplayTodos = (props) => {
  const [sort, setSort] = useState("active");

  return (
    <div className="displaytodos">
      <div className="buttons">
        <button
          onClick={() => setSort("active")}
          className={sort === "active" ? "active" : ""}
        >
          Active
        </button>
        <button
          onClick={() => setSort("completed")}
          className={sort === "completed" ? "active" : ""}
        >
          Completed
        </button>
        <button
          onClick={() => setSort("all")}
          className={sort === "all" ? "active" : ""}
        >
          All
        </button>
      </div>
      <ul>
        {props.todos.length > 0 && sort === "active"
          ? props.todos.map((item) => {
              if (item.completed === false) {
                return (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                );
              }
              return null;
            })
          : null}
        {props.todos.length > 0 && sort === "completed"
          ? props.todos.map((item) => {
              if (item.completed === true) {
                return (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                );
              }
              return null;
            })
          : null}
        {props.todos.length > 0 && sort === "all"
          ? props.todos.map((item) => (
              <TodoItem
                key={item.id}
                item={item}
                removeTodo={props.removeTodo}
                updateTodo={props.updateTodo}
                completeTodo={props.completeTodo}
              />
            ))
          : null}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
