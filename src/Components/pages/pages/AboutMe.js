import React from "react";

function AboutMe() {
  //  var me = { name: "delton", surname: "fernandes" };
  var contact = {
    facebook: "https://www.facebook.com/delton.fernandes.37",
    instagram: "https://www.instagram.com/fdelton1234/",
    linkedin: "",
    github: "",
  };

  return (
    <div>
      <h1>About Me Page</h1>
      <a href={contact.facebook}>Facebook</a>
      {"   "}
      <a href={contact.instagram}>Instagram</a>
    </div>
  );
}
export default AboutMe;
