import { Container } from "@components/atoms";
import Pagination from "@components/atoms/Pagination";
import { DiscordBox } from "@components/molecules";
import GameCard from "@components/molecules/GameCard";
import styled from "styled-components";

const Main = styled.div`
  background: url("images/store/bg.png"),
    ${({ theme }) => theme.colors["purple-900"]};
  height: 100%;
  padding-top: 15rem;
  padding-bottom: 15rem;
  position: relative;
  background-repeat: no-repeat;
  background-position: top;
  background-size: 100% auto;
  background-blend-mode: screen;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin-bottom: 5rem;
`;

const Title = styled.p`
  font-weight: 800;
  font-size: 6.4rem;
  text-transform: uppercase;
  color: white;
`;

const DSBox = styled(DiscordBox)`
  max-width: 29rem;
`;

const StoreNav = styled.div`
  background: linear-gradient(180deg, #444761 18.75%, #2b2d42 100%);
  mix-blend-mode: normal;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.6rem 2.1rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-bottom: 5.6rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;
  margin-bottom: 5rem;
`;

const StoreContainer = styled(Container)`
  z-index: 10;
  position: relative;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Store = () => {
  return (
    <Main>
      <StoreContainer>
        <Header>
          <Title>the store</Title>
          <DSBox />
        </Header>
        <StoreNav>&nbsp;</StoreNav>
        <Grid>
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
        </Grid>
        <PaginationContainer>
          <Pagination />
        </PaginationContainer>
      </StoreContainer>
    </Main>
  );
};

export default Store;
