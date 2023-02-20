import { useContext } from "react";
import cartIcon from "../assets/svg/cart-icon.svg";
import { Icon } from "./Nav.styles";
import { CardContext } from "../App";

export default function Nav() {
  const { cart } = useContext(CardContext);
  return (
    <Icon qtd={cart.length}>
      <h1>NICE GAMES</h1>
      <div>
        <img src={cartIcon} alt="cart icon" />
      </div>
    </Icon>
  );
}
