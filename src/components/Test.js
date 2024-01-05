export default function Test() {
  return (
    <>
      <h2>Test</h2>
      {/* <WhoAmi name="Dimon" surname="Ber" link="Domen@sd.rt" /> */}

      <WhoAmi data={() => "Dimonchik"} link={"jsdhfsj@df.fhfh"} />

      {/* <WhoAmi
        fullName={{ name: "Qubic", surname: "Cat" }}
        link="Domen@cat.rt"
      /> */}
    </>
  );
}

const WhoAmi = ({ data, link }) => {
  return (
    <>
      <h1>My name is: {data()}</h1>
      <a href={link}>My link</a>
    </>
  );
};
