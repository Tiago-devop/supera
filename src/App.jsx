import { useEffect, useState } from "react";
import { fetchData } from "./fetchData";

function App() {
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
  console.log('JOQUINHOS' ,games);
  return (
    <>
      {games.map((item, index) => {
        console.log('CADA IMAGEM',item.image)
        
        return (
          <div key={item.id}>
            <h3>{item.name ? item.name : "Loading..."}</h3>
            <img
              style={{ width: 100 + "px" }}
              src={`/src/assets/img/${item.image}`}
              alt={`${item.name}`}
            />
            <h4>Price: ${item.price}</h4>
            <h5>Price: ${item.score}</h5>
          </div>
        );
      })}
    </>
  );
}

export default App;
