import React, { ReactElement } from "react";

let navRows: string[] = ["Home", "Meet the Board", "Resources", "Announcements", "Contact"];
let htmlNav: React.ReactElement<any, string | React.JSXElementConstructor<any>> | JSX.Element[] = [];
let html: string = 'e <b>ipsum</b>';

for (let i = 0; i < navRows.length; i++) {
  let change = document.getElementById(navRows[i].toLowerCase());
  htmlNav.push(<li><a href={"#" + navRows[i].toLowerCase()}>{navRows[i]}</a></li>);
}

const Navbar = () => {
  return (
    <div className="">
    
      <nav>
        <img id="logo" src="src/images/logo.png" alt="Key Club Logo" />
        <ul>
        {htmlNav}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;

