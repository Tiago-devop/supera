import styled from "styled-components";

export const GamesContainer = styled.div`
  justify-content: center;
  background-color: blue;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
  padding: 30px;
  margin: 0px;
`;

export const CardStyled = styled.div`
  background: ${(props) =>
    `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(/src/assets/img/${props.backImage})`};
  background-position: center;
  border: 1px solid black;
  background-size: cover;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  display: flex;
  width: 200px;
  height: 300px;
  margin: 10px;
  justify-content: space-between;

  img {
    width: 80px;
  }

  button {
    background-color: black;
    border-radius: 30px;
    cursor: pointer;
    padding: 10px;
    border: none;
    color: white;
    font-size: 0.9rem;
  }
`;
