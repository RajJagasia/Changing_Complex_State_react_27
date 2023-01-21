import React from "react";

function App() {
  const [fName, setFName] = React.useState("");
  const [lName, setLName] = React.useState("");

  const [fullName, setFullName] = React.useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    // const val = event.target.value;
    // const eventName = event.target.name;

    const { value: val, name: eventName } = event.target;
    console.log(event.target.name);
    if (eventName === "fName") {
      setFullName({ fName: val, lName: fullName.lName });
    } else {
      setFullName({ fName: fullName.fName, lName: val });
    }
  }

  return (
    <div className="container">
      <h1>
        {/* Hello {fName} {lName} */}
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

//The before way of doing it
// import React from "react";

// function App() {
//   const [fName, setFName] = React.useState("");
//   const [lName, setLName] = React.useState("");

//   function hadleFName(event) {
//     setFName(event.target.value);
//   }
//   function hadleLName(event) {
//     setLName(event.target.value);
//   }
//   return (
//     <div className="container">
//       <h1>
//         Hello {fName} {lName}
//       </h1>
//       <form>
//         <input
//           name="fName"
//           onChange={hadleFName}
//           placeholder="First Name"
//           value={fName}
//         />
//         <input
//           name="lName"
//           onChange={hadleLName}
//           placeholder="Last Name"
//           value={lName}
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;
