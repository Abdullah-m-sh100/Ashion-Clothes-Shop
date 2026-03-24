import "./Navbar.css";
// @ts-ignore
import logo from "../../assets/logo.png";

import { LiaSearchSolid } from "react-icons/lia";
import { IoHeartOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { TbUserCircle } from "react-icons/tb";
import { useCartContext } from "../../Contexts/cartContext/useCartContext";
import { useWishlistContext } from "../../Contexts/wishlistContext/useWishlistContext";

const Navbar = () => {
  let { cartItems } = useCartContext();
  let { wishlistItems } = useWishlistContext();

  let [showingNav, setShowingNav] = useState(false);
  const user = false;
  const loading = false;

  if (loading) {
    return (
      <div className="Navbar">
        <div className="logo">
          <Link className="" to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="Navbar">
      <div className="main-navbar">
        <div className="logo">
          <Link className="" to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className="nav-links">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/shop">
              Shop
              <IoIosArrowDown />
            </NavLink>
            {/* <ul>
              <NavLink className="nested-nav-link" to="/shop">
                <li>Women’s</li>
              </NavLink>
              <NavLink className="nested-nav-link" to="/shop">
                <li>Men’s</li>
              </NavLink>
              <NavLink className="nested-nav-link" to="/shop">
                <li>Kids</li>
              </NavLink>
            </ul> */}
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="nav-btns">
          <div className="account">
            {!user && (
              <>
                <NavLink to="/login">
                  <button>Login</button>
                </NavLink>
                /
                <NavLink to="/register">
                  <button>Register</button>
                </NavLink>
              </>
            )}
            {user && (
              <NavLink to="/profile">
                <button>
                  <TbUserCircle />
                </button>
              </NavLink>
            )}
          </div>
          <NavLink className="mineBtnPage" to="/search">
            <button>
              <LiaSearchSolid />
            </button>
          </NavLink>
          <NavLink className="mineBtnPage" to="/wishlist">
            <button>
              <span>{wishlistItems.length}</span>
              <IoHeartOutline />
            </button>
          </NavLink>
          <NavLink className="mineBtnPage" to="/cart">
            <button>
              <span>{cartItems.length}</span>
              <LiaShoppingBagSolid />
            </button>
          </NavLink>
        </div>
        <div
          className="bars-icon"
          onClick={() => {
            setShowingNav(true);
          }}
        >
          <FaBars />
        </div>
      </div>

      {/*--------------------
       - sm screen nav -
      ---------------------*/}
      <div className={`sub-navbar ${showingNav ? "active" : ""}`}>
        <div
          className="close-icon"
          onClick={() => {
            setShowingNav(false);
          }}
        >
          <IoCloseSharp />
        </div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-btns">
          {user && (
            <NavLink to="/profile">
              <button>
                <TbUserCircle />
              </button>
            </NavLink>
          )}
          <NavLink to="/search">
            <button>
              <LiaSearchSolid />
            </button>
          </NavLink>
          <NavLink className="mineBtnPage" to="/wishlist">
            <button>
              <span>{wishlistItems.length}</span>
              <IoHeartOutline />
            </button>
          </NavLink>
          <NavLink className="mineBtnPage" to="/cart">
            <button>
              <span>{cartItems.length}</span>
              <LiaShoppingBagSolid />
            </button>
          </NavLink>
        </div>
        <ul className="nav-links">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/shop">
              Shop
              <IoIosArrowDown />
            </NavLink>
            {/* <ul>
              <NavLink className="nested-nav-link" to="/shop">
                <li>Women’s</li>
              </NavLink>
              <NavLink className="nested-nav-link" to="/shop">
                <li>Men’s</li>
              </NavLink>
              <NavLink className="nested-nav-link" to="/shop">
                <li>Kids</li>
              </NavLink>
            </ul> */}
          </li>
          {/* <li className="nav-item">
            <NavLink className="nav-link" to="/blog">
              Blog
            </NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="account">
          {!user && (
            <>
              <NavLink to="/login">
                <button>Login</button>
              </NavLink>
              /
              <NavLink to="/register">
                <button>Register</button>
              </NavLink>
            </>
          )}
        </div>
      </div>
      <div className={`overflow-color ${showingNav ? "active" : ""}`}></div>
    </div>
  );
};

export default Navbar;
