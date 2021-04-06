import { Footer, Navbar } from "@components/molecules";
import styled from "styled-components";

const LayoutStyles = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`;

const LayoutNavbar = styled(Navbar)`
  flex: 0 1 auto;
`;

const LayoutChildren = styled.div`
  flex: 1 1 auto;
`;

const LayoutFooter = styled(Footer)`
  flex: 0 1 auto;
`;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LayoutStyles>
      <LayoutNavbar />
      <LayoutChildren>{children}</LayoutChildren>
      <LayoutFooter />
    </LayoutStyles>
  );
};

export default Layout;
