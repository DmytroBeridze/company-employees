import React from "react";
import "./app-filter.css";

export default function AppFilter({ getFilterData, active }) {
  const buttonsData = [
    { name: "all", label: "Всі працівники", textColor: true },
    { name: "like", label: "На підвищення", textColor: false },
    { name: "salary", label: "З/П більше 1000$", textColor: false },
  ];
  const buttons = buttonsData.map(({ name, label, textColor }) => {
    const activeBtn = active === name;
    const clazz = activeBtn ? "btn-light" : "btn-outline-light";
    const textStyle = textColor ? { color: "rgb(17 73 100)" } : null;
    return (
      <button
        key={name}
        className={`btn ${clazz}`}
        onClick={() => getFilterData(name)}
        style={textStyle}
      >
        {label}
      </button>
    );
  });

  return (
    <div className="btn-group">
      {buttons}
      {/* <button
        className="btn btn-light"
        data-filter="all"
        onClick={(e) => getFilterData(e.target.getAttribute("data-filter"))}
      >
        Всі працівники
      </button>
      <button
        className="btn btn-outline-light"
        data-fiter="like"
        onClick={(e) => getFilterData(e.target.getAttribute("data-fiter"))}
      >
        На підвищення
      </button>
      <button
        className="btn btn-outline-light"
        data-filter="salary"
        onClick={(e) => getFilterData(e.target.getAttribute("data-filter"))}
      >
        З/П більше 1000$
      </button> */}
    </div>
  );
}
