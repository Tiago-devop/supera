import { createContext, useMemo, useState } from "react";

import Card from "./components/Card";
import { AppContainer, Wrapper } from "./App.styles";
import Nav from "./components/Nav";

export const CardContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const contextValue = useMemo(() => {
    return {
      cart,
      setCart,
    };
  }, [cart, setCart]);

  return (
    <>
      <CardContext.Provider value={contextValue}>
        <Wrapper>
          <Nav cart={contextValue.cart} />
          <AppContainer>
            <Card contextValue={contextValue} />
          </AppContainer>
        </Wrapper>
      </CardContext.Provider>
    </>
  );
}

export default App;
