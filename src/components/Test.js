import React from "react";
import styled from "styled-components";

export default function Test() {
  return (
    <>
      {/* <h2>Test</h2>
      <WhoAmi data={() => "Dimonchik"} link={"jsdhfsj@df.fhfh"} /> */}
    </>
  );
}

class WhoAmi extends React.Component {
  render() {
    return (
      <>
        {/* <h1>My name is: {data()}</h1>
        <a href={link}>My link</a> */}
      </>
    );
  }
}

// --------------

function ClassesTest() {
  return (
    <>
      <h2>Test React classes</h2>
      <ReactElem name="Dymon" last="Br" />
    </>
  );
}

class ReactElem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 44,
      title: "Click State",
    };
  }

  encreaseAge = () => {
    this.setState((state) => ({
      age: state.age + 1,
      title: (state.title = "Some"),
    }));
  };

  render() {
    const { name, last } = this.props;
    return (
      <>
        <div className="nameTest">My name is {name}</div>
        <div className="lastTest">Last name: {last}</div>
        <div className="ageTest">age:{this.state.age} </div>

        <button
          style={{
            padding: "10px 20px",
            margin: "30px 0",
            borderRadius: "5px",
          }}
          onClick={this.encreaseAge}
        >
          {this.state.title}
        </button>
      </>
    );
  }
}

export { ClassesTest };

// ----------------------------
function SelfTrain() {
  return (
    <>
      <h3>-------------------------------</h3>
      <h2>Some title</h2>
      <SefElement myName="Qubic" myLastname="Cat" />
    </>
  );
}

const SpanStyled = styled.span`
  width: 60px;
  color: brown;
`;

class SefElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myAge: 2,
      profession: "",
    };
    this.professionEnterBind = this.professionEnter.bind(this);
  }

  catAgeChange = () => {
    this.setState((state) => ({
      myAge: state.myAge + 1,
    }));
  };

  hasFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  professionEnter(e) {
    this.setState({
      profession: e.target.value,
    });
  }
  // professionEnter = (e) => {
  //   this.setState({
  //     profession: e.target.value,
  //   });
  // };

  render() {
    const { myName, myLastname } = this.props;
    const { myAge, profession } = this.state;
    return (
      <>
        <SpanStyled>
          Cat Name: {myName} Cat, Lastname: {myLastname}, Profession:{" "}
          {profession}
        </SpanStyled>
        {/* <div className="firstSome">
          Cat Name: {myName} Cat, Lastname: {myLastname}, Profession:{" "}
          {profession}
        </div> */}
        <div className="myAge">Age: {this.state.myAge}</div>
        <button
          style={{ marginTop: "20px", padding: "10px 20px" }}
          onClick={this.catAgeChange}
        >
          Name Click
        </button>
        {/* form */}

        <form
          name="classForm"
          style={{ marginTop: "20px" }}
          className="classForm"
          onSubmit={(e) => this.hasFormSubmit(e)}
        >
          <input
            style={{ marginRight: "10px" }}
            type="text"
            name="formName"
            id="fName"
          />
          <input type="password" name="formPass" id="fPass" />
          <input
            name="send"
            type="submit"
            value="Send"
            style={{ marginLeft: "10px", padding: "10px 20px" }}
          />
        </form>

        <form style={{ display: "flex", flexDirection: "column" }}>
          <span>Enter profession: {profession}</span>
          <input
            placeholder="Profession"
            type="text"
            value={profession}
            onChange={this.professionEnterBind}
          />
        </form>
      </>
    );
  }
}

export { SelfTrain };

// -----styled components train---------

const Submit = styled.input`
  padding: 10px;
  color: blue;
  border-radius: 5px;
  margin: 20px;
`;
const FormTitle = styled.h2`
  font-size: 20px;
  color: ${(props) => (props.active ? "green" : "yellow")};
  margin-top: 20px;
`;

export const TestButton = styled.button`
  margin-top: 20px;
  border-radius: 5px;
  border: 1px solid green;
  padding: 10px;
`;

class FormTrain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ch: "",
      cl: "",
    };
  }

  static testValue = 10;

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.checked;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <>
        <FormTitle active> Test styled-component title</FormTitle>
        <form onSubmit={this.handleSubmit}>
          <input
            type="checkbox"
            name="ch"
            checked={this.state.ch}
            onChange={this.handleChange}
          />
          <input
            type="checkbox"
            name="cl"
            checked={this.state.cl}
            onChange={this.handleChange}
          />

          <Submit type="submit" value={"Submit"}></Submit>
        </form>
        {/* <TestButton onClick={() => console.log("test styled btn")}>
          Test button
        </TestButton> */}
      </>
    );
  }
}

export { FormTrain };
