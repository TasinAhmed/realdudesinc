import styled, { css } from "styled-components";

interface Props {
  size?: "small" | "large";
}

export const Button = styled.button<Props>`
  background: linear-gradient(90.71deg, #76b041 13.32%, #5f8e33 89.52%);
  border: 1px solid #affc41;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  cursor: pointer;
  color: white;
  text-transform: uppercase;
  font-weight: 800;
  outline: none;

  ${({ size }) =>
    size === "small" &&
    css`
      font-size: 1.4rem;
      padding: 1rem 2rem;
    `}

  ${({ size }) =>
    size === "large" &&
    css`
      font-size: 1.8rem;
      padding: 1.4rem 6rem;
    `}
`;

Button.defaultProps = {
  size: "small",
};
