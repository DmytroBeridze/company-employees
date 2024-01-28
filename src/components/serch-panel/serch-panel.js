import React from "react";
import "./serch-panel.css";

export default class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
    };
  }

  userSearch = (e) => {
    this.setState({ userName: e.target.value });
    this.props.getUserName(e.target.value);
  };
  render() {
    return (
      <input
        value={this.state.userName}
        type="text"
        className="form-control search-input"
        placeholder="Ім'я працівника"
        onChange={this.userSearch}
      />
    );
  }
}
