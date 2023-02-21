import { useContext } from "react";
import { CardContext } from "./../App";
import { v4 as uuidv4 } from "uuid";
import { CartGamesContainer, Wrapper } from "./Cart.styles";
import Currency from "./../components/Currency";

export default function Cart() {
  const { cart, setCart } = useContext(CardContext);
  function removeClick(gameId) {
    const index = cart.findIndex((game) => game.id === gameId);
    if (index !== -1) {
      const result = [...cart];
      result.splice(index, 1);
      setCart(result);
    }
  }
  return (
    <>
      <Wrapper>
        <h1>Games in your Cart</h1>
        <CartGamesContainer>
          {cart.map((item) => {
            const key = uuidv4();
            return (
              <div key={key}>
                <p>
                  Name: <span>{item.name}</span> Price:{" "}
                  <span>{item.price}</span>
                </p>
                <button onClick={() => removeClick(item.id)}>Remove</button>
              </div>
            );
          })}
          <p>
            TOTAL:{" "}
            {
              <Currency
                value={cart
                  .map((item) => item.price)
                  .reduce((acc, cur) => acc + cur, 0)}
              />
            }
          </p>
        </CartGamesContainer>
      </Wrapper>
    </>
  );
}
