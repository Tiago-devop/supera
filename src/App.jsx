import { createContext, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import Nav from "./components/Nav";

import { Wrapper } from "./App.styles";
import Cart from "./pages/Cart";

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
        <BrowserRouter>
          <Wrapper>
            <Nav cart={contextValue.cart} />
            <Routes>
              <Route
                exact
                path="/"
                element={<Card contextValue={contextValue} />}
              />
              <Route path="cart" element={<Cart />} />
            </Routes>
          </Wrapper>
        </BrowserRouter>
      </CardContext.Provider>
    </>
  );
}

export default App;
