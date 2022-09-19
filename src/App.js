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
    <Header />
    <BrowserRouter>
      <div id="routerhang">
        <ScrollTop>
          <Routes>
            <Route path="/" element={<Collection />} />
            <Route path="/ItemDetail" element={<ItemDetail />} />
          </Routes>
        </ScrollTop>
      </div>
    </BrowserRouter>
    <ScrollToTopBtn />
  </div>
);
export default App;
