import { useState } from "react";
import { Fragment } from "react";
import StudentData from "./studentData.js";

function App(props) {
  return (
    <Fragment>
      <StudentData />
    </Fragment>
  );
}

//TO DO LIST

// const [textInput, setInput]=useState('')
// let [listItem, setListItem]= useState([])

//   const add = () => {
//     setListItem(
//       [
//         ...listItem,
//         textInput,

//       ]
//     )
//   }

//   const del = (newww) => {
//     const newList = listItem.filter((textInput) => textInput !== newww)
//     setListItem(newList)
//   }

//   console.log(textInput)

//   return (
//     <div className={styles.card}>
//       <div className={styles.container}>
//         <h2>To Do List App</h2>
//       <input value={textInput} onChange={ (e)=> setInput(e.target.value)}  />

//         <button onClick={add} className={styles.submit}> add item </button>
//         <h2>List Items</h2>
//       <ul>
// 				{listItem.map(listItem => (
//           <li key={Math.floor(Math.random() * 100)}>{listItem} <button  className={styles.dele} onClick={()=>del(listItem)}>delte item</button></li>

// 				))}
//         </ul>
//         </div>
//     </div>
//   );
// }

export default App;
