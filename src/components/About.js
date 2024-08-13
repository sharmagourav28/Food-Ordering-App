import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about">
      {/* <h1>About page is this</h1> */}
      {/* <User name={"Jayant"} /> */}
      <UserClass name={"Manas"} location={"Ratlam"} />
    </div>
  );
};
export default About;
