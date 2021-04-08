import { Button, Container } from "@components/atoms";
import styled from "styled-components";

const Main = styled.div`
  background-color: ${({ theme }) => theme.colors["purple-900"]};
  height: 100%;
  padding-top: 7.5rem;
  padding-bottom: 7.5rem;
`;

const Title = styled.p`
  font-weight: 800;
  font-size: 6.4rem;
  text-transform: uppercase;
  color: white;
  margin-bottom: 3.6rem;
`;

const CartHeader = styled.div`
  height: 4rem;
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  background: linear-gradient(180deg, #444761 18.75%, #2b2d42 100%);
  mix-blend-mode: normal;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  color: white;
  display: grid;
  grid-template-columns:
    1fr 1fr minmax(auto, 14rem) minmax(auto, 14rem) minmax(auto, 14rem)
    minmax(auto, 14rem);
  align-items: center;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 1.4rem;
  margin-bottom: 4rem;
`;

const CartContent = styled.div`
  display: grid;
  grid-template-columns:
    1fr 1fr minmax(auto, 14rem) minmax(auto, 14rem) minmax(auto, 14rem)
    minmax(auto, 14rem);
  align-items: center;
  background: linear-gradient(180deg, #2b2d42 0%, #1d1e2d 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 0px 4px 4px 0px;
`;

const OptionTitle = styled.p`
  font-weight: 800;
  font-size: 1.8rem;
  text-transform: uppercase;
  color: white;
  margin-bottom: 1rem;
`;

const OptionSubtitle = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.75);
`;

const RecommendedTitle = styled.p`
  font-weight: 800;
  font-size: 3.6rem;
  text-transform: uppercase;
  color: white;
  margin-top: 14rem;
  margin-bottom: 2.5rem;
`;

const CartContainer = styled(Container)``;

const Cart: React.FC = () => {
  return (
    <Main>
      <CartContainer>
        <Title>the cart</Title>
        <CartHeader>
          <p>product</p>
          <p>option type</p>
          <p>unit price</p>
          <p>quantity</p>
          <p>total price</p>
          <p>actions</p>
        </CartHeader>
        <CartContent>
          <div>
            <img src="images/cart/rust.png" />
          </div>
          <div>
            <OptionTitle>30 days</OptionTitle>
            <OptionSubtitle>Change Option</OptionSubtitle>
          </div>
        </CartContent>
        <RecommendedTitle>Products you may like</RecommendedTitle>
        <Button>Hello</Button>
      </CartContainer>
    </Main>
  );
};

export default Cart;
