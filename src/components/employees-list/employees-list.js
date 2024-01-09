import "./employees-list.css";
import EmployeesListItem from "../employees-list-item/employees-list-item";

export default function EmployeesList({ salaryData, removeUser }) {
  const data = salaryData.map((elem) => {
    const { id, ...props } = elem;

    return (
      <EmployeesListItem
        {...props}
        key={id}
        deleteElem={() => {
          removeUser(id);
        }}
      />
    );
  });
  return (
    <ul className=" app-list list-group ">
      {data}
      {/* <EmployeesListItem name="Br.Dimon" salary={3000} />
      <EmployeesListItem name="Ct.Qubic" salary={1000} />
      <EmployeesListItem name="Mr.Who" salary={500} /> */}
    </ul>
  );
}
