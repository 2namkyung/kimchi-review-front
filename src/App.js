import React from "react";
import ScrollToTopBtn from "./components/menu/ScrollToTop";
import Header from "./components/menu/Header";
import Collection from "./components/pages/Collection";
import ItemDetail from "./components/pages/ItemDetail";

import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: unset;
  }
`;

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location]);
  return children;
};

const App = () => (
  <div className="wraper">
    <GlobalStyles />

    <BrowserRouter>
      <div id="routerhang">
        <ScrollTop>
          <Header />
          <Routes>
            <Route path="/nft/:contract/:tokenId" element={<ItemDetail />} />
            <Route path="/" element={<Collection />} />
          </Routes>
        </ScrollTop>
      </div>
    </BrowserRouter>
    <ScrollToTopBtn />
  </div>
);
export default App;
