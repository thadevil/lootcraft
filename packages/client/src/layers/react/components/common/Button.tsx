import styled from "styled-components";

export const Button = styled.div`
  cursor: pointer;
  box-shadow: 0 0 0 3px #555;
  background-color: #333;
  padding: 4px;
  border-radius: 3px;
  transition: all 100ms ease;
  user-select: none;

  :hover {
    box-shadow: 0 0 0 3px #555, 0 0 0 5px #000;
    background-color: #777;
  }

  :active {
    box-shadow: 0 0 0 3px #555, 0 0 0 5px #000;
    background-color: #666;
  }
`;
