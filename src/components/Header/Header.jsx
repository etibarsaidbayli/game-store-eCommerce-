import style from "./Header.module.css";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";

function Header() {
  return (
    <header className={style.header}>
      <div className="logo">
        <Link to="/" className={style.logo__title}>
          Oyun magazasi
        </Link>
      </div>  
    <Cart/>
    </header>
  );
}

export default Header;
