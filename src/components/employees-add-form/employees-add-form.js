import React from "react";
// import "./employees-add-form.css";
import "./employees-add-form.scss";

export default class EmployeesAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userSalary: "",
    };
    this.errorClass = "form-control";
  }
  handlerChange = (e) => {
    // const target = e.target;
    // const userName = target.name;
    // const userSalary = target.value;

    this.setState({
      // [userName]: userSalary,
      [e.target.name]: e.target.value,
    });
  };

  handlerSubmit = (e) => {
    e.preventDefault();

    if (this.state.userName.length < 3 || !this.state.userSalary) {
      this.errorClass += " inputError";
      return;
    }
    this.errorClass = "form-control";
    this.props.addItem(this.state.userName, this.state.userSalary);
    this.setState({
      userName: "",
      userSalary: "",
    });
  };

  render() {
    return (
      <form
        className="row g-col-6 employee-add-form"
        onSubmit={this.handlerSubmit}
      >
        <h2 className="employee-add-form-title p-0 mb-4 ">
          Додайте нового працівника
        </h2>
        <div className="col-auto ps-0 ">
          <label htmlFor="employee-add-form-name " className="mb-1">
            Ім'я працівника
          </label>
          <input
            type="text"
            // className="form-control "
            className={this.errorClass}
            id="employee-add-form-name"
            name="userName"
            placeholder="ПІБ"
            value={this.state.userName}
            onChange={this.handlerChange}
          />
        </div>
        <div className="col-auto">
          <label className="mb-1" htmlFor="employee-add-form-salary">
            Заробітна плата
          </label>
          <input
            type="text"
            // className="form-control"
            className={this.errorClass}
            id="employee-add-form-salary"
            name="userSalary"
            placeholder="З/П в $"
            value={this.state.userSalary}
            onChange={this.handlerChange}
          />
        </div>
        <div className="col-auto d-flex align-items-end">
          <button type="submit" className="btn btn-outline-light">
            Добавити
          </button>
        </div>
      </form>
    );
  }
}
// export default function EmployeesAddForm() {
//   return (
//     <form className="row g-col-6 employee-add-form">
//       <h2 className="employee-add-form-title p-0 mb-4 ">
//         Додайте нового працівника
//       </h2>
//       <div className="col-auto ps-0 ">
//         <label htmlFor="employee-add-form-name " className="mb-1">
//           Ім'я працівника
//         </label>
//         <input
//           type="text"
//           className="form-control"
//           id="employee-add-form-name"
//           placeholder="ПІБ"
//         />
//       </div>
//       <div className="col-auto">
//         <label className="mb-1" htmlFor="employee-add-form-salary">
//           Заробітна плата
//         </label>
//         <input
//           type="text"
//           className="form-control"
//           id="employee-add-form-salary"
//           placeholder="З/П в $"
//         />
//       </div>
//       <div className="col-auto d-flex align-items-end">
//         <button type="submit" className="btn btn-outline-light ">
//           Добавити
//         </button>
//       </div>
//     </form>
//   );
// }
