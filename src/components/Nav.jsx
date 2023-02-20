import { useContext } from "react";
import cartIcon from "../assets/svg/cart-icon.svg";
import { Icon, LinkWrapper } from "./Nav.styles";
import { CardContext } from "../App";

export default function Nav() {
  const { cart } = useContext(CardContext);
  return (
    
      <Icon qtd={cart.length}>
        <LinkWrapper to="/">
          <h1>COOL GAMES</h1>
        </LinkWrapper>
        <LinkWrapper to="/cart">
          <div>
            <img src={cartIcon} alt="cart icon" />
          </div>
        </LinkWrapper>
      </Icon>
    
  );
}
