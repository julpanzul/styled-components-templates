import styled from "styled-components";

export const Nav = styled.nav`
  height: ${(props) => props.height};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavBrand = styled.div`
  font-size: 1rem;
  font-weight: 800;
`;
export const NavList = styled.ul`
  display: ${(props) => props.display.base};
  gap: 1rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: ${(props) => props.display.sm};
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: ${(props) => props.display.md};
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    display: ${(props) => props.display.lg};
  }
`;
export const NavItem = styled.li`
  list-style: none;
  &>a {
    text-decoration: none;
    font-weight: 600;
    font-size: 1.2rem;
    padding: 0.3em 0;
    border-bottom: 4px solid transparent;
    &:hover {
      border-bottom: 4px solid slateblue;
    }
  }
`;
