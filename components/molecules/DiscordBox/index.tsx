import styled from "styled-components";

const Box = styled.div`
  background: linear-gradient(180.17deg, #8b85c1 27.46%, #7d78ab 99.85%);
  border-radius: 4px;
  padding: 2rem;
`;

const Button = styled.button`
  background-color: white;
  color: ${({ theme }) => theme.colors["purple-500"]};
  width: 100%;
  border: 0;
  outline: 0;
  cursor: pointer;
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 1.4rem;
`;

const BoxContent = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 2.2rem;
  margin-bottom: 2rem;
  align-items: center;
  color: white;
  font-weight: 700;
  font-size: 1.4rem;
  font-family: "Inter", sans-serif;
  line-height: 1.7rem;
`;

const DiscordBox: React.FC = ({ className }) => {
  return (
    <Box className={className}>
      <BoxContent>
        <svg
          width="39"
          height="44"
          viewBox="0 0 39 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.35"
            d="M15.5845 18.5117C14.3514 18.5117 13.3779 19.5951 13.3779 20.9167C13.3779 22.2384 14.373 23.3217 15.5845 23.3217C16.8175 23.3217 17.791 22.2384 17.791 20.9167C17.8126 19.5951 16.8175 18.5117 15.5845 18.5117ZM23.4804 18.5117C22.2473 18.5117 21.2738 19.5951 21.2738 20.9167C21.2738 22.2384 22.269 23.3217 23.4804 23.3217C24.7134 23.3217 25.6869 22.2384 25.6869 20.9167C25.6869 19.5951 24.7134 18.5117 23.4804 18.5117Z"
            fill="black"
          />
          <path
            opacity="0.35"
            d="M33.9939 0.333374H5.00611C2.56162 0.333374 0.571411 2.32671 0.571411 4.79671V34.09C0.571411 36.56 2.56162 38.5534 5.00611 38.5534H29.5375L28.391 34.545L31.16 37.1234L33.7775 39.55L38.4286 43.6667V4.79671C38.4286 2.32671 36.4384 0.333374 33.9939 0.333374ZM25.6437 28.63C25.6437 28.63 24.8649 27.6984 24.2159 26.875C27.0498 26.0734 28.1314 24.2967 28.1314 24.2967C27.2445 24.8817 26.4008 25.2934 25.6437 25.575C24.562 26.03 23.5237 26.3334 22.5069 26.5067C20.4302 26.8967 18.5265 26.7884 16.9041 26.485C15.671 26.2467 14.611 25.9 13.7241 25.5534C13.2265 25.3584 12.6857 25.12 12.1449 24.8167C12.08 24.7734 12.0151 24.7517 11.9502 24.7084C11.9069 24.6867 11.8853 24.665 11.8637 24.6434C11.4743 24.4267 11.2579 24.275 11.2579 24.275C11.2579 24.275 12.2963 26.0084 15.0437 26.8317C14.3947 27.655 13.5943 28.63 13.5943 28.63C8.81345 28.4784 6.99631 25.3367 6.99631 25.3367C6.99631 18.36 10.1114 12.705 10.1114 12.705C13.2265 10.365 16.1902 10.43 16.1902 10.43L16.4065 10.69C12.5126 11.8167 10.7171 13.5284 10.7171 13.5284C10.7171 13.5284 11.193 13.2684 11.9935 12.9C14.3081 11.8817 16.1469 11.6 16.9041 11.535C17.0339 11.5134 17.142 11.4917 17.2718 11.4917C18.5914 11.3184 20.0841 11.275 21.6416 11.4484C23.6967 11.6867 25.9032 12.2934 28.153 13.5284C28.153 13.5284 26.4441 11.9034 22.7665 10.7767L23.0694 10.43C23.0694 10.43 26.033 10.365 29.1481 12.705C29.1481 12.705 32.2633 18.36 32.2633 25.3367C32.2633 25.3367 30.4245 28.4784 25.6437 28.63Z"
            fill="black"
          />
        </svg>

        <div>
          Check out our Discord for Exclusive Offers you won’t find anywhere
          else!
        </div>
      </BoxContent>
      <Button>discord invite</Button>
    </Box>
  );
};

export default DiscordBox;