import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { Link } from "react-router";

function PizzakPage() {
  const [pizzak, setPizzak] = useState<Array<Pizza>>([]);

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((res) => setPizzak(res.data))
      .catch((res) => console.log(res));
  }, []);

  return (
    <>
      <Link to={`/pizzacreate`}>
        <button>Uj pizza</button>
      </Link>
      {pizzak.map((p) => (
        <p>
          <Link to={`/pizzak/${p.id}`}>{p.nev}</Link> <br/>
          <img src={`${BACKEND_URL}/kepek/${p.imageUrl}`} width={300} /> <br />
          {p.ar} Ft <br />
          {p.leiras} <br />
          <Link to={`/pizzamodify/${p.id}`}><button>Pizza szerkesztése</button></Link> <br />
          <Link to={`/pizzadelete/${p.id}`}><button>Pizza törlése</button></Link>
        </p>
      ))}
    </>
  );
}

export default PizzakPage;
