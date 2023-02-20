import { useContext, useEffect, useState } from "react";
import { fetchData } from "../fetchData";
import Currency from "../components/Currency";
import { CardStyled } from "./Card.styles";
import { CardContext } from '../App'

export default function Card() {
  const {cart, setCart} = useContext(CardContext)
  const [games, setGames] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetchData();
      setGames(data);
    }

    if (games.length === 0) {
      getData();
    }
  }, [games]);

  function handleClick(id, name, price) {
    const newCard = { id, name, price };

    setCards((prevCards) => [...prevCards, newCard]);
    setCart((prevCart) => [...prevCart, newCard]);

  }

  useEffect(() => {
    console.log("CARDS", cards);
    console.log("CARTTTT", cart);
  }, [cards]);
  
  return (
    <>
      {games.map((item) => {
        return (
          <CardStyled key={item.id} backImage={item.image}>
            <h3>{item.name}</h3>
            <img
              style={{ width: 100 + "px" }}
              src={`/src/assets/img/${item.image}`}
              alt={`${item.name}`}
            />
            <Currency value={item.price} />
            <h5>Score: {item.score}</h5>
            <button onClick={() => handleClick(item.id, item.name, item.price)}>
              ADD CART
            </button>
          </CardStyled>
        );
      })}
    </>
  );
}
