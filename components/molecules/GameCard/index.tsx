import styled from "styled-components";
import { PriceTag } from "@components/atoms";

const Main = styled.div`
  background: linear-gradient(180deg, #2b2d42 0%, #1d1e2d 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 0px 4px 4px 0px;
  height: 17rem;
  display: flex;
`;

const Content = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const GameImg = styled.img`
  height: 100%;
`;

const Title = styled.p`
  font-size: 1.6rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.9rem;
  text-transform: uppercase;
`;

const SubTitle = styled.p`
  font-size: 1.3rem;
  font-weight: 800;
  color: white;
  text-transform: uppercase;
`;

const Offer = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 0.4rem;
`;

const Prices = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: start;
  align-items: center;
`;

const PriceNew = styled.div`
  font-size: 1.3rem;
  color: white;
  font-weight: 800;
  text-transform: uppercase;

  span {
    font-size: 2.2rem;
  }
`;

const PriceOld = styled.div`
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1rem;
  font-weight: 700;

  span {
    text-decoration: line-through;
    font-size: 1.3rem;
  }
`;

const GameCard = () => {
  return (
    <Main>
      <GameImg src="images/store/gta.png" />
      <Content>
        <div>
          <Title>GTA Recovery Package</Title>
          <SubTitle>money drop</SubTitle>
        </div>
        <div>
          <Offer>Offer from 30 sellers</Offer>
          <Prices>
            <div>
              <PriceNew>
                <span>85.00</span> usd
              </PriceNew>
              <PriceOld>
                <span>100</span> usd
              </PriceOld>
            </div>
            <PriceTag color="purple">50% off</PriceTag>
          </Prices>
        </div>
      </Content>
    </Main>
  );
};

export default GameCard;
