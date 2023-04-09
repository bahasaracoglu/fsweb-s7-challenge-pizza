import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  const toHome = () => {
    history.push("/pizza");
  };

  return (
    <div>
      <h1> Teknolojik Yemekler</h1>
      <h2> KOD ACIKTIRIR PIZZA, DOYURUR</h2>
      <button onClick={() => toHome()}> ACIKTIM </button>
    </div>
  );
}
