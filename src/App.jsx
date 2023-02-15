import { useEffect, useState } from "react";
import { fetchData } from "./fetchData";

function App() {
  const [games, setGames] = useState(null);

  useEffect(() => {
    async function getData() {
      const data = await fetchData();
      setGames(data)
    }
    
    if(games == null) {
      getData();
    }
  }, [games]);

  return <h1>{games ? games[0].name : 'Loading...'}</h1>;
}

export default App;
