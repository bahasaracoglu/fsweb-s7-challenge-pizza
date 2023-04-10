import { useHistory } from "react-router-dom";
import "./css/Home.css";

export default function Home() {
  const history = useHistory();
  const toOrder = () => {
    history.push("/pizza");
  };

  return (
    <div>
      <h2> KOD ACIKTIRIR PIZZA, DOYURUR</h2>
      <button onClick={() => toOrder()}> ACIKTIM </button>
    </div>
  );
}
