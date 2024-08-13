import React from "react";
import { json } from "react-router-dom";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      minus: -1,
      userInfo: {
        name: "Dummy",
        location: "Indor",
        followers: 0,
        following: 0,
        avatar_url:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fimg&psig=AOvVaw0lebbMGfg1rspzIEFGivY1&ust=1723618833335000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPCf0dSy8YcDFQAAAAAdAAAAABAE",
      },
      akarshInfo: {
        Aname: "Dummy",
        location: "Indor",
        followers: 0,
        following: 0,
        avatar_url:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fimg&psig=AOvVaw0lebbMGfg1rspzIEFGivY1&ust=1723618833335000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPCf0dSy8YcDFQAAAAAdAAAAABAE",
      },
    };
  }
  async componentDidMount() {
    console.log("Component did mount called");
    // to make an api called gourav
    const data = await fetch("https://api.github.com/users/sharmagourav28");
    const jsondata = await data.json();
    this.setState({
      userInfo: jsondata,
    });
    console.log(jsondata);
  }
  componentWillUnmount() {
    console.log("Component will mount called");
  }
  render() {
    const { name, location, avatar_url, following, followers } =
      this.state.userInfo;

    const { count, minus } = this.state;
    return (
      <>
        <div className="about">
          <div className="user">
            <div className="git-img">
              <img src={avatar_url} alt="" />
            </div>
            <div className="git-about">
              <h2>Name : {name}</h2>
              <h3>Location : {location}</h3>
              <h3>Followers : {followers}</h3>
              <h3>Following : {following}</h3>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default UserClass;
