import { Container } from "@components/atoms";
import styled from "styled-components";
import Link from "next/link";

const Nav = styled.nav`
  height: 8rem;
  background-color: ${({ theme }) => theme.colors["purple-700"]};
  position: fixed;
  width: 100%;
  z-index: 100;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const NavContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
`;

const NavLeft = styled.div`
  justify-self: left;
  display: flex;
`;

const NavRight = styled.div`
  justify-self: right;
  display: flex;
`;

const Logo = styled.div`
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 800;
  color: white;
  margin-right: 7rem;
  cursor: pointer;
`;

const NavLink = styled.p`
  cursor: pointer;
  color: white;
  opacity: 50%;
  font-size: 1.4rem;
  text-transform: uppercase;
`;

const NavLinkContainer = styled.div`
  display: flex;
  font-weight: 800;

  ${NavLink}:not(:last-child) {
    margin-right: 2.4rem;
  }
`;

const SearchBtn = styled.div`
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.1);
  height: 3.1rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-right: 1.2rem;
`;

const LangBtn = styled.div`
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.1);
  height: 3.1rem;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 500;
  font-size: 1.2rem;
  font-family: "Inter", sans-serif;
  color: white;

  svg {
    margin-right: 0.6rem;
  }
`;

const SignIn = styled.div`
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.1);
  height: 3.1rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: white;
`;

const Register = styled.div`
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.1);
  height: 3.1rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors["orange-500"]};
`;

const Divider = styled.div`
  background: rgba(255, 255, 255, 0.1);
  height: 2.8rem;
  width: 1px;
  margin-right: 1.6rem;
  margin-left: 1.6rem;
`;

const JoinContainer = styled.div`
  margin-right: 3.4rem;
  display: flex;

  & > *:not(:last-child) {
    margin-right: 1.6rem;
  }
`;

const Cart = styled.div`
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.1);
  height: 3.1rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-right: 1.6rem;
`;

const Bell = styled.div`
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.1);
  height: 3.1rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <NavContainer>
        <NavLeft>
          <Link href="/">
            <Logo>realDuDesInc</Logo>
          </Link>
          <NavLinkContainer>
            <Link href="/store">
              <NavLink>Store</NavLink>
            </Link>
            <NavLink>Sponsors</NavLink>
            <NavLink>articles</NavLink>
            <NavLink>about</NavLink>
            <NavLink>contact</NavLink>
          </NavLinkContainer>
        </NavLeft>
        <NavRight>
          <SearchBtn>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 2.00077C4.93913 2.00077 3.92172 2.42219 3.17157 3.17234C2.42143 3.92248 2 4.9399 2 6.00077C2 7.06163 2.42143 8.07905 3.17157 8.82919C3.92172 9.57934 4.93913 10.0008 6 10.0008C7.06087 10.0008 8.07828 9.57934 8.82843 8.82919C9.57857 8.07905 10 7.06163 10 6.00077C10 4.9399 9.57857 3.92248 8.82843 3.17234C8.07828 2.42219 7.06087 2.00077 6 2.00077ZM1.13461e-07 6.00077C-0.00012039 5.05647 0.222642 4.12548 0.650171 3.28351C1.0777 2.44154 1.69792 1.71236 2.4604 1.15529C3.22287 0.598219 4.10606 0.228978 5.03815 0.0775993C5.97023 -0.0737798 6.92488 -0.00302249 7.82446 0.284117C8.72404 0.571256 9.54315 1.06667 10.2152 1.73006C10.8872 2.39346 11.3931 3.2061 11.6919 4.1019C11.9906 4.9977 12.0737 5.95136 11.9343 6.88532C11.795 7.81928 11.4372 8.70716 10.89 9.47677L15.707 14.2938C15.8892 14.4824 15.99 14.735 15.9877 14.9972C15.9854 15.2594 15.8802 15.5102 15.6948 15.6956C15.5094 15.881 15.2586 15.9862 14.9964 15.9884C14.7342 15.9907 14.4816 15.8899 14.293 15.7078L9.477 10.8918C8.57936 11.53 7.52335 11.9089 6.42468 11.9869C5.326 12.0648 4.22707 11.8389 3.2483 11.3337C2.26953 10.8286 1.44869 10.0638 0.875723 9.12312C0.30276 8.18244 -0.000214051 7.1022 1.13461e-07 6.00077Z"
                fill="white"
              />
            </svg>
          </SearchBtn>
          <LangBtn>
            <svg
              width={16}
              height={11}
              viewBox="0 0 16 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path fill="url(#prefix__pattern0)" d="M0 0h16v11H0z" />
              <defs>
                <pattern
                  id="prefix__pattern0"
                  patternContentUnits="objectBoundingBox"
                  width={1}
                  height={1}
                >
                  <use
                    xlinkHref="#prefix__image0"
                    transform="scale(.0625 .0909)"
                  />
                </pattern>
                <image
                  id="prefix__image0"
                  width={16}
                  height={11}
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHzSURBVHjaYkxOP8IAB//+Mfz7w8Dwi4HhP5CcJb/n/7evb16/APL/gRFQDiAAw3JuAgAIBEDQ/iswEERjGzBQLEru97ll0g0+3HvqMn1SpqlqGsZMsZsIe0SICA5gt5a/AGIEarCPtFh+6N/ffwxA9OvP/7//QYwff/6fZahmePeB4dNHhi+fGb59Y4zyvHHmCEAAAW3YDzQYaJJ93a+vX79aVf58//69fvEPlpIfnz59+vDhw7t37968efP3b/SXL59OnjwIEEAsDP+YgY53b2b89++/awvLn98MDi2cVxl+/vl6mituCtBghi9f/v/48e/XL86krj9XzwEEEENy8g6gu22rfn78+NGs5Ofr16+ZC58+fvyYwX8rxOxXr169fPny+fPn1//93bJlBUAAsQADZMEBxj9/GBxb2P/9+S/R8u3vzxuyaX8ZHv3j8/YGms3w8ycQARmi2eE37t4ACCDGR4/uSkrKAS35B3TT////wADOgLOBIaXIyjBlwxKAAGKRXjCB0SOEaeu+/y9fMnz4AHQxCP348R/o+l+//sMZQBNLEvif3AcIIMZbty7Ly6t9ZmXl+fXj/38GoHH/UcGfP79//BBiYHjy9+8/oUkNAAHEwt1V/vI/KBY/QSISFqM/GBg+MzB8A6PfYC5EFiDAABqgW776MP0rAAAAAElFTkSuQmCC"
                />
              </defs>
            </svg>
            <p>English</p>
          </LangBtn>
          <Divider />
          <JoinContainer>
            <SignIn>Sign In</SignIn>
            <Link href="/register">
              <Register>Register</Register>
            </Link>
          </JoinContainer>
          <Link href="/cart">
            <Cart>
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2H2.22L2.525 3.222C2.52803 3.23607 2.53136 3.25007 2.535 3.264L3.893 8.694L3 9.586C1.74 10.846 2.632 13 4.414 13H13C13.2652 13 13.5196 12.8946 13.7071 12.7071C13.8946 12.5196 14 12.2652 14 12C14 11.7348 13.8946 11.4804 13.7071 11.2929C13.5196 11.1054 13.2652 11 13 11H4.414L5.414 10H12C12.1857 9.9999 12.3676 9.94812 12.5255 9.85045C12.6834 9.75278 12.811 9.61308 12.894 9.447L15.894 3.447C15.9702 3.29458 16.0061 3.12522 15.9985 2.95501C15.9908 2.78479 15.9398 2.61935 15.8502 2.47439C15.7606 2.32944 15.6355 2.20977 15.4867 2.12674C15.3379 2.04372 15.1704 2.00009 15 2H4.28L3.97 0.757C3.91583 0.540753 3.79095 0.348809 3.61521 0.211655C3.43946 0.0745022 3.22293 5.86043e-06 3 0H1ZM14 15.5C14 15.8978 13.842 16.2794 13.5607 16.5607C13.2794 16.842 12.8978 17 12.5 17C12.1022 17 11.7206 16.842 11.4393 16.5607C11.158 16.2794 11 15.8978 11 15.5C11 15.1022 11.158 14.7206 11.4393 14.4393C11.7206 14.158 12.1022 14 12.5 14C12.8978 14 13.2794 14.158 13.5607 14.4393C13.842 14.7206 14 15.1022 14 15.5ZM4.5 17C4.89782 17 5.27936 16.842 5.56066 16.5607C5.84196 16.2794 6 15.8978 6 15.5C6 15.1022 5.84196 14.7206 5.56066 14.4393C5.27936 14.158 4.89782 14 4.5 14C4.10218 14 3.72064 14.158 3.43934 14.4393C3.15804 14.7206 3 15.1022 3 15.5C3 15.8978 3.15804 16.2794 3.43934 16.5607C3.72064 16.842 4.10218 17 4.5 17Z"
                  fill="white"
                />
              </svg>
            </Cart>
          </Link>
          <Bell>
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.99979 0C5.40849 0 3.88236 0.632141 2.75715 1.75736C1.63193 2.88258 0.999787 4.4087 0.999787 6V9.586L0.292787 10.293C0.152977 10.4329 0.057771 10.611 0.0192035 10.805C-0.0193641 10.9989 0.000438951 11.2 0.076109 11.3827C0.151779 11.5654 0.279918 11.7215 0.444328 11.8314C0.608738 11.9413 0.802037 12 0.999787 12H12.9998C13.1975 12 13.3908 11.9413 13.5552 11.8314C13.7197 11.7215 13.8478 11.5654 13.9235 11.3827C13.9991 11.2 14.0189 10.9989 13.9804 10.805C13.9418 10.611 13.8466 10.4329 13.7068 10.293L12.9998 9.586V6C12.9998 4.4087 12.3676 2.88258 11.2424 1.75736C10.1172 0.632141 8.59109 0 6.99979 0ZM6.99979 16C6.20414 16 5.44108 15.6839 4.87847 15.1213C4.31586 14.5587 3.99979 13.7956 3.99979 13H9.99979C9.99979 13.7956 9.68372 14.5587 9.12111 15.1213C8.5585 15.6839 7.79544 16 6.99979 16Z"
                fill="#F46036"
              />
            </svg>
          </Bell>
        </NavRight>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
