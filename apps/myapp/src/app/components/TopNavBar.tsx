import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { Row } from 'antd';

const Container = styled(Row)`
  background-color: #000;
  height: 40px;

  display: flex;
  align-items: center;
`;

const Link = styled(NavLink)`
  color: #eee;
  font-size: 15px;
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: #444;
    color: #ddd;
  }

  &:not(:first-of-type) {
    margin-left: 6px;
  }

  &.active {
    font-size: 17px;
    font-weight: 700;
  }
`;

const NavBar = () => {
  return (
    <Container className="navbar">
      <Link exact to="/">
        Home
      </Link>
      <Link exact to="/contact">
        Contact
      </Link>
    </Container>
  );
};

export default NavBar;
