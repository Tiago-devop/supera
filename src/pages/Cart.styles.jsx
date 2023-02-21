import styled from "styled-components";

export const Wrapper = styled.div`
  justify-content: flex-start;
  flex-direction: column;
  background-color: blue;
  align-items: center;
  min-height: 100vh;
  color: white;
  display: flex;
`;

export const CartGamesContainer = styled.div`
  div {
    justify-content: space-between;
    align-items: center;
    display: flex;
  }

  p {
    margin-right: 30px;
    font-size: 1.2rem;
  }

  button {
    border-radius: 10px;
    cursor: pointer;
    border: none;
    padding: 5px;
  }
`;
