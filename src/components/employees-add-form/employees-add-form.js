import "./employees-add-form.css";

export default function EmployeesAddForm() {
  return (
    <form className="row g-col-6 employee-add-form">
      <h2 className="employee-add-form-title p-0 mb-4 ">
        Додайте нового працівника
      </h2>
      <div className="col-auto ps-0 ">
        <label htmlFor="employee-add-form-name " className="mb-1">
          Ім'я працівника
        </label>
        <input
          type="text"
          className="form-control"
          id="employee-add-form-name"
          placeholder="ПІБ"
        />
      </div>
      <div className="col-auto">
        <label className="mb-1" htmlFor="employee-add-form-salary">
          Заробітна плата
        </label>
        <input
          type="text"
          className="form-control"
          id="employee-add-form-salary"
          placeholder="З/П в $"
        />
      </div>
      <div className="col-auto d-flex align-items-end">
        <button type="submit" className="btn btn-outline-light ">
          Добавити
        </button>
      </div>
    </form>
  );
}

function TestProps(props) {
  return (
    <>
      <h1>Hello:{props.data}</h1>
    </>
  );
}

export { TestProps };
