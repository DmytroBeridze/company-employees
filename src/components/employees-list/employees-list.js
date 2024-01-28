import "./employees-list.css";
import EmployeesListItem from "../employees-list-item/employees-list-item";
// --------------
import UndefinedUser from "../undefinedUserListItem/undefinedUserListItem";

export default function EmployeesList({
  salaryData,
  removeUser,
  propsToggle,
  bonusLavel,
  toggleLike,
}) {
  let data = "";
  if (salaryData.length === 0) {
    data = <UndefinedUser />;
  } else
    data = salaryData.map((elem) => {
      const { id, ...props } = elem;

      return (
        <EmployeesListItem
          {...props}
          key={id}
          deleteElem={() => {
            removeUser(id);
          }}
          propsToggle={(e) => {
            propsToggle(id, e.currentTarget.getAttribute("data-toggle"));
          }}
          // bonusLavel={() => {
          //   bonusLavel(id);
          // }}
          // toggleLike={() => {
          //   toggleLike(id);
          // }}
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
