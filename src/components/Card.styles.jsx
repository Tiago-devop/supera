import styled from "styled-components";

export const CardStyled = styled.div`
  background: ${(props) =>
    `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(/src/assets/img/${props.backImage})`};
  background-size: cover;
  background-position: center;
  border: 1px solid black;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  border-radius: 10px;
  margin: 10px;
  text-align: center;
`;
