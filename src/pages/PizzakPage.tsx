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
    <Link to={`/pizzacreate`}><button>Uj pizza</button></Link>
      {pizzak.map((p) => (
        <p>
          {p.nev}
          <img src={`${BACKEND_URL}/kepek/${p.imageUrl}`} width={300} />
        </p>
      ))}
    </>
  );
}

export default PizzakPage;
