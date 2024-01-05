import "./employees-list.css";
import EmployeesListItem from "../employees-list-item/employees-list-item";

export default function EmployeesList({ salaryData }) {
  const data = salaryData.map((elem) => (
    <EmployeesListItem {...elem} key={elem.name} />
  ));
  return (
    <ul className=" app-list list-group ">
      {data}
      {/* <EmployeesListItem name="Br.Dimon" salary={3000} />
      <EmployeesListItem name="Ct.Qubic" salary={1000} />
      <EmployeesListItem name="Mr.Who" salary={500} /> */}
    </ul>
  );
}
