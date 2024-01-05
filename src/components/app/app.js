import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../serch-panel/serch-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
// -------Test----------
import Test from "../../components/Test";

export default function App() {
  const salaryData = [
    {
      name: "Br.Dimon",
      salary: 4000,
      ingrease: false,
    },
    {
      name: "Ct.Qubic",
      salary: 1500,
      ingrease: true,
    },
    {
      name: "Mr.Who",
      salary: 800,
      ingrease: false,
    },
  ];
  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList salaryData={salaryData} />
      <EmployeesAddForm />
      {/* test */}
      {/* <Test /> */}
    </div>
  );
}
