import React from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../serch-panel/serch-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";
// -------Test----------
import Test, { ClassesTest, SelfTrain, FormTrain } from "../../components/Test";
// --------------------------------------------

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      salaryData: [
        {
          name: "Br.Dimon",
          salary: 4000,
          ingrease: false,
          id: 1,
        },
        {
          name: "Ct.Qubic",
          salary: 1500,
          ingrease: true,
          id: 2,
        },
        {
          name: "Mr.Who",
          salary: 800,
          ingrease: false,
          id: 3,
        },
      ],
    };
  }
  deleteItem = (id) => {
    this.setState(({ salaryData }) => {
      // const index = salaryData.findIndex((elem) => elem.id === id);
      // const before = salaryData.slice(0, index);
      // const after = salaryData.slice(index + 1);
      // const newState = [...before, ...after];
      const newState = salaryData.filter((elem) => elem.id !== id);
      return { salaryData: newState };
    });
  };
  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          salaryData={this.state.salaryData}
          removeUser={this.deleteItem}
        />
        <EmployeesAddForm />
        {/* test */}
        {/* <Test />
        <ClassesTest />
        <SelfTrain />
        <FormTrain /> */}
      </div>
    );
  }
}
