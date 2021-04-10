import { Button, Container } from "@components/atoms";
import GameCard from "@components/molecules/GameCard";
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
  background: linear-gradient(180deg, #444761 18.75%, #2b2d42 100%);
  mix-blend-mode: normal;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  color: white;
  display: grid;
  grid-template-columns:
    3fr 2fr 14rem 14rem 14rem
    14rem;
  align-items: center;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 1.4rem;
  margin-bottom: 4rem;

  & > *:first-child {
    margin-left: 2.4rem;
  }
`;

const CartContent = styled.div`
  display: grid;
  grid-template-columns:
    3fr 2fr 14rem 14rem 14rem
    14rem;
  align-items: center;
  background: linear-gradient(180deg, #2b2d42 0%, #1d1e2d 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 0px 4px 4px 0px;
  justify-items: start;
  margin-bottom: 3.6rem;
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
  margin-bottom: 2.5rem;
`;

const CartContainer = styled(Container)``;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;
  max-height: 100%;
`;

const CartImg = styled.img`
  height: 14rem;
  margin-right: 2.3rem;
`;

const GameInfo = styled.div``;

const Product = styled.div`
  display: flex;
  align-items: center;
`;

const GameTitle = styled.p`
  font-size: 1.6rem;
  font-weight: 800;
  text-transform: uppercase;
  color: white;
  margin-bottom: 1.4rem;
`;

const Details = styled.div`
  font-weight: 700;
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.6rem;

  span {
    color: #ffbf00;
  }
`;

const Price = styled.div`
  font-size: 1.3rem;
  font-weight: 800;
  color: white;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;

  span {
    font-size: 2.2rem;
  }
`;

const Delete = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 1.3rem;
  font-weight: 800;
  cursor: pointer;

  svg {
    margin-right: 1.2rem;
  }
`;

const Quantity = styled.div`
  background-color: ${({ theme }) => theme.colors["purple-900"]};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  height: 3.2rem;
  display: grid;
  grid-template-columns: 3rem 1px 5rem 1px 3rem;
  place-items: center;
  font-size: 1.3rem;
  font-weight: 800;
  color: white;
`;

const Divider = styled.div`
  justify-self: stretch;
  align-self: stretch;
  background: rgba(255, 255, 255, 0.1);
`;

const CouponTitle = styled.p`
  font-size: 1.4rem;
  color: white;
  margin-bottom: 1.8rem;
`;

const Checkout = styled.div`
  margin-bottom: 14rem;
  display: flex;
  justify-content: space-between;
`;

const Code = styled.div`
  background: #2b2d42;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px 0px 0px 4px;
`;

const CodeInput = styled.input`
  margin-left: 1rem;
  margin-right: 1rem;
  outline: none;
  border: none;
  background-color: transparent;
  color: white;
`;

const CouponDiscount = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 2.5rem;
  margin-bottom: 3rem;
  align-items: center;
`;

const CouponTag = styled.div`
  background: #2dc7ff;
  padding: 1rem 2rem;
  color: white;
  font-size: 1.4rem;
  font-weight: 800;
  text-transform: uppercase;
`;

const Remove = styled.div`
  font-weight: 400;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.75);
`;

const CheckoutContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

const CheckoutPrice = styled.div`
  font-size: 1.3rem;
  font-weight: 800;
  color: white;
  text-transform: uppercase;

  span {
    font-size: 2.2rem;
    margin-right: 0.8rem;
  }
`;

const TotalPrice = styled.div`
  font-weight: 800;
  color: white;
  text-transform: uppercase;
  font-size: 2.2rem;
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 2.5rem;
  align-items: center;
  margin-bottom: 3rem;
`;

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
          <Product>
            <CartImg src="images/cart/gta.png" />
            <GameInfo>
              <GameTitle>GTA RECOVERY PACKAGE</GameTitle>
              <Details>
                Availability: <span>Instant</span>
              </Details>
              <Details>
                Region: <span>Global</span>
              </Details>
              <Details>
                Platform: <span>PC</span>
              </Details>
            </GameInfo>
          </Product>
          <div>
            <OptionTitle>30 days</OptionTitle>
            <OptionSubtitle>Change Option</OptionSubtitle>
          </div>
          <Price>
            <p>usd</p>
            <span>85.00</span>
          </Price>
          <Quantity>
            <svg
              width="10"
              height="2"
              viewBox="0 0 10 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H9C9.26522 0 9.51957 0.105357 9.70711 0.292893C9.89464 0.48043 10 0.734784 10 1C10 1.26522 9.89464 1.51957 9.70711 1.70711C9.51957 1.89464 9.26522 2 9 2H1C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1Z"
                fill="white"
                fill-opacity="0.75"
              />
            </svg>
            <Divider>&nbsp;</Divider>
            <p>1</p>
            <Divider>&nbsp;</Divider>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 0C5.26522 0 5.51957 0.105357 5.70711 0.292893C5.89464 0.48043 6 0.734784 6 1V4H9C9.26522 4 9.51957 4.10536 9.70711 4.29289C9.89464 4.48043 10 4.73478 10 5C10 5.26522 9.89464 5.51957 9.70711 5.70711C9.51957 5.89464 9.26522 6 9 6H6V9C6 9.26522 5.89464 9.51957 5.70711 9.70711C5.51957 9.89464 5.26522 10 5 10C4.73478 10 4.48043 9.89464 4.29289 9.70711C4.10536 9.51957 4 9.26522 4 9V6H1C0.734784 6 0.48043 5.89464 0.292893 5.70711C0.105357 5.51957 0 5.26522 0 5C0 4.73478 0.105357 4.48043 0.292893 4.29289C0.48043 4.10536 0.734784 4 1 4H4V1C4 0.734784 4.10536 0.48043 4.29289 0.292893C4.48043 0.105357 4.73478 0 5 0Z"
                fill="white"
                fill-opacity="0.75"
              />
            </svg>
          </Quantity>
          <Price>
            <p>usd</p>
            <span>85.00</span>
          </Price>
          <Delete>
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 0C5.81434 9.91486e-05 5.63237 0.0518831 5.47447 0.149552C5.31658 0.247222 5.18899 0.386919 5.106 0.553L4.382 2H1C0.734784 2 0.48043 2.10536 0.292893 2.29289C0.105357 2.48043 0 2.73478 0 3C0 3.26522 0.105357 3.51957 0.292893 3.70711C0.48043 3.89464 0.734784 4 1 4V14C1 14.5304 1.21071 15.0391 1.58579 15.4142C1.96086 15.7893 2.46957 16 3 16H11C11.5304 16 12.0391 15.7893 12.4142 15.4142C12.7893 15.0391 13 14.5304 13 14V4C13.2652 4 13.5196 3.89464 13.7071 3.70711C13.8946 3.51957 14 3.26522 14 3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2H9.618L8.894 0.553C8.81101 0.386919 8.68342 0.247222 8.52553 0.149552C8.36763 0.0518831 8.18566 9.91486e-05 8 0H6ZM4 6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5C5.26522 5 5.51957 5.10536 5.70711 5.29289C5.89464 5.48043 6 5.73478 6 6V12C6 12.2652 5.89464 12.5196 5.70711 12.7071C5.51957 12.8946 5.26522 13 5 13C4.73478 13 4.48043 12.8946 4.29289 12.7071C4.10536 12.5196 4 12.2652 4 12V6ZM9 5C8.73478 5 8.48043 5.10536 8.29289 5.29289C8.10536 5.48043 8 5.73478 8 6V12C8 12.2652 8.10536 12.5196 8.29289 12.7071C8.48043 12.8946 8.73478 13 9 13C9.26522 13 9.51957 12.8946 9.70711 12.7071C9.89464 12.5196 10 12.2652 10 12V6C10 5.73478 9.89464 5.48043 9.70711 5.29289C9.51957 5.10536 9.26522 5 9 5Z"
                fill="#F46036"
              />
            </svg>
            <p>Delete</p>
          </Delete>
        </CartContent>
        <Checkout>
          <div>
            <CouponTitle>Coupon Code</CouponTitle>
            <Code>
              <CodeInput />
              <Button>Apply</Button>
            </Code>
          </div>
          <CheckoutContainer>
            <CouponDiscount>
              <Remove>Remove</Remove>
              <CouponTag>newyearsale</CouponTag>
              <CheckoutPrice>
                <div>
                  <span>-14.00</span>
                  usd
                </div>
              </CheckoutPrice>
            </CouponDiscount>
            <TotalPrice>
              <p>subtotal</p>
              <CheckoutPrice>
                <div>
                  <span>44.00</span> usd
                </div>
              </CheckoutPrice>
            </TotalPrice>
            <Button size="large">checkout</Button>
          </CheckoutContainer>
        </Checkout>
        <RecommendedTitle>Products you may like</RecommendedTitle>
        <Grid>
          <GameCard />
          <GameCard />
          <GameCard />
        </Grid>
      </CartContainer>
    </Main>
  );
};

export default Cart;
