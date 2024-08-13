import { useState } from "react";

const User = (props) => {
  const [cnt, setCnt] = useState(0);
  const [minus, setminus] = useState(-1);
  return (
    <div className="user">
      <h2>Name :{props.name}</h2>
      <h3>count = {cnt}</h3>
      <h3>Minus = {minus}</h3>
      <h3>Location : Indore</h3>
      <h4>Contact : gouravsharma2806@gmail.com</h4>
      <p>Functional Components</p>
    </div>
  );
};
export default User;
