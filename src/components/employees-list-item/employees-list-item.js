import React from "react";
import "./employees-list-item.css";

function EmployeesListItem(props) {
  const {
    name,
    salary,
    ingrease,
    like,
    deleteElem,
    toggleLike,
    bonusLavel,
    propsToggle,
  } = props;

  let textStyle =
    "list-group-item d-flex justify-content-between align-items-center";
  if (ingrease) {
    textStyle += " ingrease";
  }

  if (like) {
    textStyle += " like";
  }

  // let likeStyle =
  //   "list-group-item d-flex justify-content-between align-items-center";
  // if (like) {
  //   likeStyle += " active";
  // }
  return (
    <li className={textStyle}>
      <span
        className="list-group-item-label"
        data-toggle="like"
        onClick={propsToggle}
        // onClick={toggleLike}
      >
        {name}
      </span>
      <input
        type="text"
        defaultValue={`$ ${salary}`}
        className="list-group-item-input "
      />

      <div
        className=" m-0 d-flex align-items-center"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button
          type="button"
          className="btn btn-light me-2 testBtn"
          data-toggle="ingrease"
          onClick={propsToggle}
          // onClick={bonusLavel}
        >
          <i className="fa-solid fa-stroopwafel"></i>
        </button>
        <button
          type="button"
          className="btn btn-light me-2"
          onClick={deleteElem}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
        <i className=" fa-solid fa-star"></i>
      </div>
    </li>
  );
}

export default EmployeesListItem;

// !-----functional method
// export default function EmployeesListItem({ name, salary, ingrease }) {
//   const styles = ingrease
//     ? "list-group-item ingrease d-flex justify-content-between align-items-center"
//     : "list-group-item d-flex justify-content-between align-items-center";

//   return (
//     <li className={styles}>
//       <span className="list-group-item-label">{name}</span>
//       <input
//         type="text"
//         defaultValue={`$ ${salary}`}
//         className="list-group-item-input "
//       />

//       <div
//         className=" m-0 d-flex align-items-center"
//         role="group"
//         aria-label="Basic mixed styles example"
//       >
//         <button type="button" className="btn btn-light me-2 testBtn">
//           <i className="fa-solid fa-stroopwafel"></i>
//         </button>
//         <button type="button" className="btn btn-light me-2">
//           <i className="fa-solid fa-trash"></i>
//         </button>
//         <i className="fa-solid fa-star"></i>
//       </div>
//     </li>
//   );
// }
