import styled from "styled-components";

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors["purple-700"]};
  color: white;
  padding: 1.2rem;
  font-size: 1.4rem;
  line-height: 1.7rem;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
  transition: all 0.3s ease-in-out;
  outline: none;

  &:focus {
    box-shadow: 0px 0px 8px 4px rgba(123, 97, 255, 0.25);
    border: 1px solid #7b61ff;
  }

  ::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;
