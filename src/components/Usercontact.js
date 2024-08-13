import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Usercontact = () => {
  const [gitdata, Setgitdata] = useState(null);
  useEffect(() => {
    fetchgitdata();
  }, []);
  const fetchgitdata = async () => {
    const akarsh = await fetch("https://api.github.com/users/akarsh-pahariya");
    const akarshjson = await akarsh.json();
    console.log(akarshjson);
    Setgitdata(akarshjson);
  };
  if (gitdata === null) {
    return <Shimmer />;
  }
  const { name, location, followers, following, avatar_url } = gitdata;
  return (
    <div className="usercontact">
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
    </div>
  );
};

export default Usercontact;
