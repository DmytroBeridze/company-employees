import React from "react";
import nextId from "react-id-generator";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../serch-panel/serch-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";
// -------Test----------

import Test, {
  ClassesTest,
  SelfTrain,
  FormTrain,
  TestButton,
} from "../../components/Test";
import styled from "styled-components";
// розширюємо TestButton іншими стилями
const BigButton = styled(TestButton)`
  display: block;
  margin: 20px auto;
  background-color: purple;
  color: white;
`;

// --------------------------------------------

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      salaryData: [
        {
          name: "Br.Dimon",
          salary: 4000,
          ingrease: true,
          id: 1,
          like: true,
        },
        {
          name: "Ct.Qubic",
          salary: 1500,
          ingrease: false,
          id: 2,
          like: false,
        },
        {
          name: "Mr.Who",
          salary: 800,
          ingrease: false,
          id: 3,
          like: false,
        },
      ],
      foundUser: "",
      filter: "all",
    };
    this.indexId = 4;
  }

  // delete user
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
  // add User
  addItem = (name, salary) => {
    const newUser = {
      name: name,
      salary: salary,
      ingrease: false,
      id: this.indexId++,
      // id: nextId(),
    };

    this.setState(({ salaryData }) => {
      const newItem = [...salaryData, newUser];
      return { salaryData: newItem };
    });
  };

  // // bonus level change
  // bonusLavel = (id) => {
  //   this.setState(({ salaryData }) => ({
  //     salaryData: salaryData.map((elem) => {
  //       if (elem.id === id) {
  //         return { ...elem, ingrease: !elem.ingrease };
  //       } else return elem;
  //     }),
  //   }));
  // };
  // // toggleLike
  // toggleLike = (id) => {
  //   this.setState(({ salaryData }) => ({
  //     salaryData: salaryData.map((elem) => {
  //       if (elem.id === id) {
  //         return { ...elem, like: !elem.like };
  //       } else return elem;
  //     }),
  //   }));
  // };

  // Поєднуєм bonusLavel та toggleLike в один метод
  propsToggle = (id, prop) => {
    this.setState(({ salaryData }) => ({
      salaryData: salaryData.map((elem) => {
        if (elem.id === id) {
          return { ...elem, [prop]: !elem[prop] };
        } else return elem;
      }),
    }));
  };
  // ---------------search panel
  getUserName = (value) => {
    return this.setState({ foundUser: value });
  };
  searchUsers = (arr, state) => {
    if (!state) {
      return arr;
    }
    return arr.filter((elem) => elem.name.indexOf(state) > -1);
  };
  // -----------------filter panel
  getFilterData = (value) => {
    this.setState({ filter: value });
  };

  filterUsers = (arr, state) => {
    switch (state) {
      case "like":
        return arr.filter((elem) => elem.like);
      case "salary":
        return arr.filter((elem) => elem.salary > 1000);
      default:
        return arr;
    }
  };

  render() {
    const employees = this.state.salaryData.length;
    const employeesBonus = this.state.salaryData.filter(
      (elem) => elem.ingrease
    ).length;
    const foundPerson = this.searchUsers(
      this.state.salaryData,
      this.state.foundUser
    );

    let filteredData = this.filterUsers(foundPerson, this.state.filter);
    // let filteredData =
    //   this.filterUsers(foundPerson, this.state.filter).length > 0
    //     ? this.filterUsers(foundPerson, this.state.filter)
    //     : [{ name: "Користувача не знайдено", salary: 0, id: 0 }];

    return (
      <div className="app">
        <AppInfo employees={employees} employeesBonus={employeesBonus} />

        <div className="search-panel">
          <SearchPanel getUserName={this.getUserName} />
          <AppFilter
            getFilterData={this.getFilterData}
            active={this.state.filter}
          />
        </div>

        <EmployeesList
          salaryData={filteredData}
          removeUser={this.deleteItem}
          propsToggle={this.propsToggle}
          // bonusLavel={this.bonusLavel}
          // toggleLike={this.toggleLike}
        />
        <EmployeesAddForm addItem={this.addItem} />

        {/* test */}
        {/* <Test />
        <ClassesTest />
        <SelfTrain />
        <FormTrain />
        <TestButton onClick={(e) => console.log(e.target)}>
          Import button
        </TestButton> */}
        {/* замінюємо тег з "button" на "a"--- */}
        {/* <BigButton as="a" onClick={(e) => console.log(e.target)}>
          Extendet Import button
        </BigButton> */}
      </div>
    );
  }
}
