import { useEffect, useState } from "react";
import { fetchData } from "../fetchData";
import Currency from "../components/Currency";
import { CardStyled } from "./Card.styles";

export default function Card() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetchData();
      setGames(data);
    }

    if (games.length === 0) {
      getData();
    }
  }, [games]);
  console.log("JOQUINHOS", games);
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
          </CardStyled>
        );
      })}
    </>
  );
}
