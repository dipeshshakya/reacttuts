import React from "react";

// function Greet() {
//   return (
//     <div>
//       <h1>Dipesh</h1>
//     </div>
//   );
// }
// const Greet = () => <h1>Dipesh</h1>;

const Greet = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
