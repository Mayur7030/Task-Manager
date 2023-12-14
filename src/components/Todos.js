// import React, { useState } from "react";
// import { connect } from "react-redux";
// import { addTodos } from "../redux/reducer";
// import { GoPlus } from "react-icons/go";
// import { motion } from "framer-motion";

// const mapStateToProps = (state) => {
//   return {
//     todos: state,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTodo: (obj) => dispatch(addTodos(obj)),
//   };
// };

// const Todos = (props) => {
//   const [todo, setTodo] = useState("");
//   const [description, setDescription] = useState("");
//   const [dueDate, setDueDate] = useState("");

//   const handleChange = (e) => { 
//     setTodo(e.target.value);
//   };
//   const handleChange1 = (e) => {
//     setDescription(e.target.value);
//   };
//   const handleChange2 = (e) => {
//     setDueDate(e.target.value);
//   };

//   // const add = () => {
//   //   if (todo === "") {
//   //     alert("Input is Empty");
//   //   } else {
//   //     props.addTodo({
//   //       id: Math.floor(Math.random() * 1000),
//   //       item: todo,
//   //       completed: false,
//   //     });
//   //     setTodo("");
//   //   }
//   //   if (description === "") {
//   //     alert("Description is Empty");
//   //   } else {
//   //     props.addTodo({
//   //       id: Math.floor(Math.random() * 1000),
//   //       item: description,
//   //       completed: false,
//   //     });
//   //     setDescription("");
//   //   }
//   //   if (dueDate === "") {
//   //     alert("dueDate is Empty");
//   //   } else {
//   //     props.addTodo({
//   //       id: Math.floor(Math.random() * 1000),
//   //       item: dueDate,
//   //       completed: false,
//   //     });
//   //     setDueDate("");
//   //   }
//   // };

//   const add = () => {
//     if (todo === "" || description === "" || dueDate === "") {
//       alert("Please fill all fields.");
//     } else {
//       props.addTodo({
//         id: Math.floor(Math.random() * 1000),
//         item: {
//           todo,
//           description,
//           dueDate,
//         },
//         completed: false,
//       });
//       setTodo("");
//       setDescription("");
//       setDueDate("");
//     }
//   };
  
//   //console.log("props from store", props);
//   return (
//     <div className="addTodos">
//       <div className="addTodos-input">
//       <input
//         type="text"
//         placeholder="Enter Title"
//         onChange={(e) => handleChange(e)}
//         className="todo-input"
//         value={todo}
//       />
//            <input
//         type="text"
//         placeholder="Enter description"
//         onChange={(e) => handleChange1(e)}
//         className="todo-input"
//         value={description}
//       />
//            <input
//         type="date"
        
//         onChange={(e) => handleChange2(e)}
//         className="todo-input"
//         value={dueDate}
//       />
// </div>
//       <motion.button
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         className="add-btn"
//         onClick={() => add()}
//       >
//         <GoPlus />
//       </motion.button>
//       <br />
//     </div>
//   );
// };
// //we can use connect method to connect this component with redux store
// export default connect(mapStateToProps, mapDispatchToProps)(Todos);


import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
import { GoPlus } from "react-icons/go";
import './Todos.css'

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleChange1 = (e) => {
    setDescription(e.target.value);
  };

  const handleChange2 = (e) => {
    setDueDate(e.target.value);
  };

  const add = () => {
    if (!todo || !description || !dueDate) {
      alert("Please fill all fields.");
      return;
    }

    props.addTodo({
      id: Math.floor(Math.random() * 1000),
      item: {
        todo,
        description,
        dueDate,
      },
      completed: false,
    });

    setTodo("");
    setDescription("");
    setDueDate("");
  };

  //console.log("props from store", props);
  return (
    <div className="addTodos">
      <div className="addTodos-input">
        <input
          type="text"
          placeholder="Enter Title"
          onChange={(e) => handleChange(e)}
          className="todo-input"
          value={todo}
        />
        <input
          type="text"
          placeholder="Enter Description"
          onChange={(e) => handleChange1(e)}
          className="todo-input"
          value={description}
        />
        <input
          type="date"
          placeholder="Select Due Date"
          onChange={(e) => handleChange2(e)}
          className="todo-input"
          value={dueDate}
        />
      </div>
      <button className="add-btn" onClick={() => add()}>
        <GoPlus /> Add
      </button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
