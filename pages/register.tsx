import { Button, Container, Input } from "@components/atoms";
import styled from "styled-components";

const Main = styled.div`
  background-color: ${({ theme }) => theme.colors["purple-900"]};
  height: 100%;
  padding-top: 13rem;
  padding-bottom: 13rem;
`;

const RegisterContainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RegisterBox = styled.div`
  max-width: 92rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${({ theme }) => theme.colors["purple-700"]};
`;

const ContentBox = styled.div`
  padding: 8rem 5rem;
  position: relative;
`;

const Title = styled.div`
  font-size: 3.6rem;
  line-height: 4rem;
  font-weight: 800;
  text-transform: uppercase;
  color: white;
  text-align: center;
  margin-bottom: 0.8rem;
`;

const Member = styled.p`
  font-size: 1.4rem;
  line-height: 3.4rem;
  color: #e6e7ef;
  text-align: center;
  margin-bottom: 2.8rem;

  span {
    color: ${({ theme }) => theme.colors["orange-500"]};
    cursor: pointer;
  }
`;

const Label = styled.p`
  color: white;
  font-size: 1.4rem;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
`;

const InputGroup = styled.div`
  ${Input}:not(:last-child) {
    margin-bottom: 1.6rem;
  }

  &:not(:last-child) {
    margin-bottom: 2.8rem;
  }

  &:last-child {
    margin-bottom: 5.7rem;
  }
`;

const Policy = styled.div`
  font-size: 1.4rem;
  line-height: 2rem;
  color: #e6e7ef;
  text-align: center;

  span {
    color: ${({ theme }) => theme.colors["orange-500"]};
    cursor: pointer;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  background: url("images/register/hustle.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const ImgText = styled.div`
  font-weight: 800;
  font-size: 7.2rem;
  text-transform: uppercase;
  color: white;
  position: absolute;
  left: 2rem;
  bottom: 2rem;
`;

const SubmitBtn = styled(Button)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
`;

const Register: React.FC = () => {
  return (
    <Main>
      <RegisterContainer>
        <RegisterBox>
          <ImgContainer>
            <ImgText>
              <p>don't</p>
              <p>hate the</p>
              <p>hustle</p>
            </ImgText>
          </ImgContainer>
          <ContentBox>
            <Title>
              <p>welcome to</p>
              <p>realdudesinc</p>
            </Title>
            <Member>
              Already a member? <span>Log in</span>
            </Member>
            <form>
              <div>
                <InputGroup>
                  <Label>email address</Label>
                  <Input placeholder="Email" />
                </InputGroup>
                <InputGroup>
                  <Label>username</Label>
                  <Input placeholder="Username" />
                </InputGroup>
                <InputGroup>
                  <Label>account password</Label>
                  <Input placeholder="Password" />
                  <Input placeholder="Confirm Password" />
                </InputGroup>
              </div>
              <Policy>
                <p>By Registering to this site I agree to the</p>
                <p>
                  <span>Terms and Conditions</span> and{" "}
                  <span>Privacy Policy</span>
                </p>
              </Policy>
              <SubmitBtn size="large" type="submit">
                grant access
              </SubmitBtn>
            </form>
          </ContentBox>
        </RegisterBox>
      </RegisterContainer>
    </Main>
  );
};

export default Register;
