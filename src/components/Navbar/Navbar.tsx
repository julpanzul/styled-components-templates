import { Nav, NavBrand, NavList, NavItem } from "./NavbarStyles";
import Link from 'next/link'
import { FiSun, FiMoon } from "react-icons/fi";

// import { useTheme } from "../../utils/ThemeContext";
import { useTheme } from "next-themes";

const navlinks: {label: string, path: string}[] = [
  { label: "Home", path: "/" },
  { label: "Movies", path: "/movies" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];


function Navbar() {
  const {theme, setTheme} = useTheme()

  return (
    <Nav>
      <NavBrand>
        <h2>Brand</h2>
      </NavBrand>
      <NavList display={{base: 'none', md: 'flex'}}>
        {navlinks.map(({ label, path }, i) => (
          <NavItem key={i}>
            <Link href={path}>
              <a>{label}</a>
            </Link>
          </NavItem>
        ))}
      </NavList>
      <button onClick={() => setTheme(theme === 'light'? 'dark':'light')}>
        {theme === 'light'? <FiMoon size={24}/> : <FiSun size={24}/>}
      </button>
    </Nav>
  );
}

export default Navbar;
