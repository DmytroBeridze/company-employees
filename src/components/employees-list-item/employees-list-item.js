import "./employees-list-item.css";

export default function EmployeesListItem({ name, salary, ingrease }) {
  const styles = ingrease
    ? "list-group-item ingrease d-flex justify-content-between align-items-center"
    : "list-group-item d-flex justify-content-between align-items-center";

  return (
    // <li
    //   className={`list-group-item ${
    //     ingrease && "ingrease"
    //   }  d-flex justify-content-between align-items-center`}
    // >
    <li className={styles}>
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
        <button type="button" className="btn btn-light me-2 testBtn">
          <i className="fa-solid fa-stroopwafel"></i>
        </button>
        <button type="button" className="btn btn-light me-2">
          <i className="fa-solid fa-trash"></i>
        </button>
        <i className="fa-solid fa-star"></i>
      </div>
    </li>
  );
}
