const load = (id: string) => {
  id !== "home" ? window.location.href = id.replace(/\s+/g, '') + ".html" : window.location.href = "/";
}

const navRows: string[] = ["Home", "KW Board", "Resources", "Announcements", "Contact"];
let htmlNav: React.ReactElement<any, string | React.JSXElementConstructor<any>> | JSX.Element[] = [];

for (let i = 0; i < navRows.length; i++) {
  const id = navRows[i].toLowerCase();
  htmlNav.push(<li><h1 className="nav" onClick={() => load(id)} >{navRows[i]}</h1></li>);
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