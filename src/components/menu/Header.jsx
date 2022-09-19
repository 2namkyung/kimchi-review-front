import React, { useState } from "react";
import Breakpoint, {
  BreakpointProvider,
  setDefaultBreakpoints,
} from "react-socks";

import { Link } from "@reach/router";
import Klip from "../klip/Klip";

setDefaultBreakpoints([{ xs: 0 }, { l: 1199 }, { xl: 1200 }]);

const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        className: isCurrent ? "active" : "non-active",
      };
    }}
  />
);

const Header = function () {
  const [showmenu, btn_icon] = useState(false);

  return (
    <header id="myHeader" className="navbar white">
      <div className="container">
        <div className="row w-100-nav">
          <div className="logo px-0">
            <div className="navbar-title navbar-item">
              <NavLink to="/">
                <img
                  src="./img/logo-retro.png"
                  className="img-fluid d-block"
                  alt="#"
                />
                <img
                  src="./img/logo-retro.png"
                  className="img-fluid d-3"
                  alt="#"
                />
                <img
                  src="./img/logo-retro.png"
                  className="img-fluid d-none"
                  alt="#"
                />
              </NavLink>
            </div>
          </div>

          <div className="search">
            <input
              id="quick_search"
              className="xs-hide"
              name="quick_search"
              placeholder="search item here..."
              type="text"
            />
          </div>

          <BreakpointProvider>
            <Breakpoint l down>
              {showmenu && (
                <div className="menu">
                  <div className="navbar-item">
                    {/* <NavLink to="/">Collection</NavLink> */}
                  </div>
                </div>
              )}
            </Breakpoint>

            <Breakpoint xl>
              <div className="menu">
                <div className="navbar-item">
                  {/* <NavLink to="/">Collection</NavLink> */}
                </div>
              </div>
            </Breakpoint>
          </BreakpointProvider>

          <div className="mainside">
            <Klip />
          </div>
        </div>

        {/* <button className="nav-icon" onClick={() => btn_icon(!showmenu)}>
          <div className="menu-line white"></div>
          <div className="menu-line1 white"></div>
          <div className="menu-line2 white"></div>
        </button> */}
      </div>
    </header>
  );
};
export default Header;
