import { Search, ShoppingBasket } from "@material-ui/icons";
import { auth } from "./firebase";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{basket,user}] = useStateValue();
  console.log(basket);
  const login = () =>{
    if(user) {
      auth.signOut();
    }
  }
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header__search">
      <input type="text" className="header__searchInput" />
      <Search className="header__searchIcon" />
      </div>
      <div className="headerNav">
      <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello {user?.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign in'}</span>
          </div>
      </Link>
      <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns </span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
      </Link>
      <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
      </Link>
    </div>  
    <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasket/>
            <span className="header__optionLineTwo  header__basketCount">{basket?.length}</span>
          </div>
      </Link>
    </nav>
  );
}

export default Header;
