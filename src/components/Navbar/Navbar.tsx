import { Nav, NavBrand, NavList, NavItem } from "./NavbarStyles";
import Link from 'next/link'
import { FiSun, FiMoon } from "react-icons/fi";

// import { useTheme } from "../../utils/ThemeContext";
import { useTheme } from "next-themes";
import { Button } from "../../styles/GlobalComponents";

const navlinks: {label: string, path: string}[] = [
  { label: "Home", path: "/" },
  { label: "Movies", path: "/movies" },
  { label: "Ecommerce", path: "/ecommerce" },
  { label: "Property", path: "/realestate" },
];

function Navbar() {
  const {theme, setTheme} = useTheme()

  return (
    <Nav height={'40px'}>
      <NavBrand>
        <Link href={'/'} passHref>
          <a>
            <h2>Brand</h2>
          </a>
        </Link>
      </NavBrand>
      <NavList display={{base: 'none', md: 'flex'}}>
        {navlinks.map(({ label, path }, i) => (
          <NavItem key={i}>
            <Link href={path} passHref>
              <a>{label}</a>
            </Link>
          </NavItem>
        ))}
      </NavList>
      <Button onClick={() => setTheme(theme === 'light'? 'dark':'light')} size={'xs'} bg={'none'} border={'none'}>
        {theme === 'light'? <FiMoon size={16}/> : <FiSun size={16}/>}
      </Button>
    </Nav>
  );
}

export default Navbar;
