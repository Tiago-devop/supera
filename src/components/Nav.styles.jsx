import { Link } from "react-router-dom";
import styled from "styled-components";

export const Icon = styled.div`
  justify-content: space-between;
  background-color: black;
  display: flex;

  h1 {
    margin-left: 100px;
    color: white;
  }

  div {
    justify-content: center;
    align-items: center;
    position: relative;
    display: flex;
    width: 100px;
    height: 100%;
  }

  img {
    width: 50px;
  }

  div:after {
    content: "${(props) => `${props.qtd}`}";
    justify-content: center;
    background-color: red;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    font-size: 12px;
    display: flex;
    color: white;
    height: 20px;
    width: 20px;
    right: 22px;
    top: 17px;
  }
`;

export const LinkWrapper = styled(Link)`
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  display: flex;
  text-decoration: none;
`;
