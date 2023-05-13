import React from "react";

let navRows: string[] = ["Home", "About", "Meet the Board", "Resources", "Announcements", "Contact"];
let htmlNav: React.ReactElement<any, string | React.JSXElementConstructor<any>> | JSX.Element[] = [];

for (let i = 0; i < navRows.length; i++) {
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