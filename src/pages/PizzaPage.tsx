import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { useParams } from "react-router";

function PizzaPage() {
  const [pizza, setPizza] = useState<Pizza>();
  const { id } = useParams();

  useEffect(() => {
    apiClient
      .get(`pizzak/${id}`)
      .then((res) => setPizza(res.data))
      .catch((res) => console.log(res));
  }, [id]);

  return (
    <>
      <p>
        <h1> {pizza?.nev}</h1>
        <h2> <img src={`${BACKEND_URL}/kepek/${pizza?.imageUrl}`} width={300} /></h2>
        <h2> {pizza?.ar}</h2>
        <h2> {pizza?.leiras}</h2>
      </p>
    </>
  );
}

export default PizzaPage;
