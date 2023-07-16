import logo from "/src/assets/logo.png";

let active:boolean = false;

const load = (id: string) => {
  id !== "home" ? window.location.href = id.replace(/\s+/g, '') + ".html" : window.location.href = "/";
}

const navRows: string[] = ["Home", "Resources", "Announcements", "Contact"];
let htmlNav: React.ReactElement<any, string | React.JSXElementConstructor<any>> | JSX.Element[] = [];

for (let i = 0; i < navRows.length; i++) {
  const id = navRows[i].toLowerCase();
  htmlNav.push(<li><h1 className="nav" onClick={() => load(id)} >{navRows[i]}</h1></li>);
}

const hamburgerMenu = () => {
  if (active) {
    document.getElementById("hamburger")?.classList.add("active");
    active = !active;
  } else {
    document.getElementById("hamburger")?.classList.remove("active");
    active = !active;
  }
}

const Navbar = () => {
  return (
    <div className="">
      <nav>
        <img id="logo" src={logo} alt="Key Club Logo" />
        <ul id="nav-list">
        {htmlNav}
        </ul>
        <div id="hamburger" onClick={() => hamburgerMenu()}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;