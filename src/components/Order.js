import { NavLink } from "react-router-dom";
import Selection from "./Selection";
import Prefrences from "./Prefrences";
import "./css/Order.css";
export default function Order() {
  return (
    <div className="order">
      <div className="nav-url">
        <nav>
          <li>
            <NavLink to="/">Anasayfa-</NavLink>
          </li>
          <li>
            <a href="">Seçenekler-</a>
          </li>
          <li>
            <NavLink to="/pizza">Sipariş Oluştur</NavLink>
          </li>
        </nav>
      </div>
      <div className="form-components">
        <Selection />
        <Prefrences />
      </div>
    </div>
  );
}
