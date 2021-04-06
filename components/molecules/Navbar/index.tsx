import { Container } from "@components/atoms";
import styled from "styled-components";

const Nav = styled.nav`
  height: 8rem;
  background-color: ${({ theme }) => theme.colors["purple-700"]};
`;

const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <NavContainer>
        <div>Navbar</div>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
