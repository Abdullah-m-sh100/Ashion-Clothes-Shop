import { NavLink } from "react-router-dom";
import "./Hero_home.css";

const HeroHome = () => {
  return (
    <div className="HeroHome">
      <div className="row">
        <div className="col-1">
          <div className="cat-texts">
            <h1>Women’s fashion</h1>
            <p>
              Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
              incidid-unt labore edolore magna aliquapendisse ultrices gravida.
            </p>
            <NavLink className="nav-link" to="/shop">
              <button className="main-button">Shop now</button>
            </NavLink>
          </div>
        </div>
        <div className="col-2">
          <div className="cat-1">
            <div className="cat-texts">
              <h2>Men’s fashion</h2>
              <p>358 items</p>
              <NavLink className="nav-link" to="/shop">
                <button className="main-button">Shop now</button>
              </NavLink>
            </div>
          </div>
          <div className="cat-2">
            <div className="cat-texts">
              <h2>Kid’s fashion</h2>
              <p>273 items</p>
              <NavLink className="nav-link" to="/shop">
                <button className="main-button">Shop now</button>
              </NavLink>
            </div>
          </div>
          <div className="cat-3">
            <div className="cat-texts">
              <h2>Cosmetics</h2>
              <p>159 items</p>
              <NavLink className="nav-link" to="/shop">
                <button className="main-button">Shop now</button>
              </NavLink>
            </div>
          </div>
          <div className="cat-4">
            <div className="cat-texts">
              <h2>Accessories</h2>
              <p>792 items</p>
              <NavLink className="nav-link" to="/shop">
                <button className="main-button">Shop now</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
