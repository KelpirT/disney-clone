import styled from "styled-components";


const Header = (props) => {
  return <Nav>Hello</Nav>;
};

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: black ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px; 
    letter-spacing: 16px;
    z-index: 3;
`

export default Header;
