import React from "react";

let navRows: string[] = ["Home", "About KC", "Meet the Board", "Resources", "Announcements", "Contact"];
let htmlNav: React.ReactElement<any, string | React.JSXElementConstructor<any>> | JSX.Element[] = [];

for (let i = 0; i < navRows.length; i++) {
  htmlNav.push(<li><a href="">{navRows[i]}</a></li>);
}

const Navbar = () => {
  return (
    <div className="">
      <nav>
        <ul>
        {htmlNav}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;