import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Selection from "./Selection";
import Prefrences from "./Prefrences";
export default function Order() {
  return (
    <div>
      <header>
        <nav>
          <li>
            <NavLink to="/">Anasayfa</NavLink>
          </li>
          <li>Seçenekler</li>
          <li>
            <NavLink to="/pizza">Sipariş Oluştur</NavLink>
          </li>
        </nav>
      </header>

      <Selection />
      <Prefrences />
    </div>
  );
}
