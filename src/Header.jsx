import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #000000;
  padding: 20px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  flex: 1;
  text-align: center;
  margin: 0px;
`;

const Logo = styled.img`
  height: 100px;

  @media (max-width: 768px) {
    height: 50px;
  }
`;

const Navbar = styled.nav`
  flex: 1;
  text-align: center;
  margin: 0 80px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: row;
    font-size: 10px;
  }
`;

const NavItem = styled.li`
  margin: 0 40px;
  margin-top: 15px;
  font-family: Lato, sans-serif;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: 600;

  &:hover {
    color: orange;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Navbar>
        <NavList>
          <NavItem>
            <NavLink href="#">TEAMS</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">CALENDARIO</NavLink>
          </NavItem>
        </NavList>
      </Navbar>
      <LogoContainer>
        <Logo src="/EWLOGO2.jpg" alt="Logo" />
      </LogoContainer>
      <Navbar>
        <NavList>
          <NavItem>
            <NavLink href="#">SOMOS</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">CONTACTO</NavLink>
          </NavItem>
        </NavList>
      </Navbar>
    </HeaderContainer>
  );
}

export default Header;
