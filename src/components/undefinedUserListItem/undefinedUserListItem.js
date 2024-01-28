import "./undefinedUserListItem";

export default function UndefinedUser() {
  return (
    <>
      <div
        className="undefinedItem"
        style={{
          padding: "20px",
          color: "red",
          border: "1px solid red",
          borderRadius: "5px",
          transition: "1s",
        }}
      >
        {"Працівників не знайдено"}
      </div>
    </>
  );
}
