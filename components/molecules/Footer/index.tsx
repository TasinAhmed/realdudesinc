import { Container } from "@components/atoms";
import styled from "styled-components";
import DiscordBox from "../DiscordBox";

const FooterStyles = styled.footer`
  border-top: 4px solid ${({ theme }) => theme.colors["orange-500"]};
  background-color: ${({ theme }) => theme.colors["purple-700"]};
  padding-top: 10rem;
  padding-bottom: 10rem;
  position: relative;
  background: url("images/footer/bg.jpg");
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
`;

const FooterContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const FooterTitle = styled.p`
  color: ${({ theme }) => theme.colors["orange-500"]};
  font-weight: 800;
  font-size: 1.8rem;
  text-shadow: 0px 0px 20px rgba(244, 96, 54, 0.5);
  text-transform: uppercase;
  margin-bottom: 3rem;
`;

const FooterLink = styled.p`
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 800;
  text-transform: uppercase;
  color: white;
`;

const FooterCell = styled.div`
  ${FooterLink}:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

const DsContainer = styled.div`
  height: 100%;
  display: grid;
  align-items: center;
`;

const Footer = () => {
  return (
    <>
      <FooterStyles>
        <FooterContainer>
          <FooterCell>
            <FooterTitle>RealDudesinc</FooterTitle>
            <FooterLink>home</FooterLink>
            <FooterLink>store</FooterLink>
            <FooterLink>sponsors</FooterLink>
            <FooterLink>about us</FooterLink>
            <FooterLink>contact us</FooterLink>
          </FooterCell>
          <FooterCell>
            <FooterTitle>help</FooterTitle>
            <FooterLink>support hub</FooterLink>
            <FooterLink>stay safe</FooterLink>
            <FooterLink>terms &amp; conditions</FooterLink>
            <FooterLink>privacy policy</FooterLink>
            <FooterLink>returns &amp; refunds</FooterLink>
          </FooterCell>
          <FooterCell>
            <FooterTitle>Business</FooterTitle>
            <FooterLink>business center</FooterLink>
            <FooterLink>selling on realdudesinc</FooterLink>
            <FooterLink>import via api</FooterLink>
            <FooterLink>developer &amp; publisher</FooterLink>
            <FooterLink>marketing partnership</FooterLink>
          </FooterCell>
          <FooterCell>
            <DsContainer>
              <DiscordBox />
            </DsContainer>
          </FooterCell>
        </FooterContainer>
      </FooterStyles>
    </>
  );
};

export default Footer;
