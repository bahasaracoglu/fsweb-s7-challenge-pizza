import { useHistory } from "react-router-dom";
import banner from "../Assets/banner.png";
import "./css/Home.css";

export default function Home() {
  const history = useHistory();
  const toOrder = () => {
    history.push("/pizza");
  };

  return (
    <div className="home">
      <div className="home-main">
        <h2> KOD ACIKTIRIR PIZZA, DOYURUR</h2>
        <button className="order-button" onClick={() => toOrder()}>
          {" "}
          ACIKTIM{" "}
        </button>
      </div>
      <div className="banner">
        <img src={banner} alt="banner" />
      </div>
    </div>
  );
}
