import "./app-filter.css";

export default function AppFilter() {
  return (
    <div className="btn-group">
      <button className="btn btn-light">Всі працівники</button>
      <button className="btn btn-outline-light">На підвищення</button>
      <button className="btn btn-outline-light">З/П більше 1000$</button>
    </div>
  );
}
