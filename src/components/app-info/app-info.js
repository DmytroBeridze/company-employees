import "./app-info.css";

export default function AppInfo({ employees, employeesBonus }) {
  return (
    <div className="app-info">
      <h1>Облік працівників в компанії:</h1>
      <h2>Загальна кількість працівників: {employees}</h2>
      <h2>Премію отримують: {employeesBonus} </h2>
    </div>
  );
}
