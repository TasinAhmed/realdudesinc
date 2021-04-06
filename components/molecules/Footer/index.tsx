import { Container } from "@components/atoms";
import styled from "styled-components";

const TopBorder = styled.div`
  height: 4px;
  background-color: ${({ theme }) => theme.colors["orange-500"]};
`;

const BorderShadow = styled.div`
  height: 5.3rem;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: radial-gradient(
    111.86% 111.86% at 50% -11.86%,
    rgba(244, 96, 54, 0.5) 0%,
    rgba(139, 133, 193, 0) 100%
  );
  mix-blend-mode: normal;
`;

const FooterStyles = styled.footer`
  background-color: ${({ theme }) => theme.colors["purple-700"]};
  padding-top: 8rem;
  padding-bottom: 8rem;
  position: relative;
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

const Footer = () => {
  return (
    <>
      <TopBorder />
      <FooterStyles>
        <BorderShadow />
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
            <FooterTitle>Hello</FooterTitle>
          </FooterCell>
        </FooterContainer>
      </FooterStyles>
    </>
  );
};

export default Footer;
