import React from "react";
import "./employees-list-item.css";

class EmployeesListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: this.props.name,
      // salary: this.props.salary,
      ingrease: false,
      like: false,
    };
  }

  bonusLevel = () => {
    this.setState(({ ingrease }) => ({
      ingrease: !ingrease,
    }));
    // this.setState((prevState) => ({
    //   ingrease: !prevState.ingrease,
    // }));
  };

  toggleLike = (e) => {
    if (e.target.tagName === "LI" || e.target.tagName === "SPAN") {
      this.setState(({ like }) => ({
        like: !like,
      }));
    }
  };
  render() {
    const { name, salary, deleteElem } = this.props;
    const { ingrease, like } = this.state;

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
      <li className={textStyle} onClick={this.toggleLike}>
        <span className="list-group-item-label">{name}</span>
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
            onClick={this.bonusLevel}
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
