import styled, { css } from "styled-components";

interface Props {
  color: "purple" | "green" | "orange" | "yellow";
}

export const PriceTag = styled.div<Props>`
  padding: 0.4rem 0.6rem;
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.4rem;
  border-radius: 4px;

  ${({ color }) =>
    color === "purple" &&
    css`
      background-color: ${({ theme }) => theme.colors["purple-500"]};
    `}
  ${({ color }) =>
    color === "green" &&
    css`
      background-color: ${({ theme }) => theme.colors["green-500"]};
    `}
  ${({ color }) =>
    color === "orange" &&
    css`
      background-color: ${({ theme }) => theme.colors["orange-500"]};
    `}
  ${({ color }) =>
    color === "yellow" &&
    css`
      background-color: ${({ theme }) => theme.colors["yellow-500"]};
    `}
`;
