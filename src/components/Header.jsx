import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #222;
  color: #fff;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #1e90ff;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <Logo>MySite</Logo>
      <Nav>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;

