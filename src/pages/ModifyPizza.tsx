import { useState } from "react";
import type { Pizza } from "../types/Pizza";
import { Link, useParams } from "react-router";
import apiClient from "../api/apiClient";

function ModifyPizza() {
  const [nev, setNev] = useState<string>("");
  const [ar, setAr] = useState<number>(0);
  const [leiras, setLeiras] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const { id } = useParams();

  const pizza: Pizza = {
    nev,
    leiras,
    imageUrl,
    ar,
  };

  const modositas = () => {
    apiClient
      .put(`/pizzak/${id}`, pizza)
      .then((response) => {
        switch (response.status) {
          case 200:
            console.log("Pizza successfully updated");
            break;
          case 400:
            console.log("Bad request");
            break;
          default:
            console.log("error");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <p>
        <input
          type="text"
          placeholder="Adja meg a nevet: "
          onChange={(e) => setNev(e.target.value)}
        />
        <input
          type="number"
          placeholder="Adja meg a arat: "
          onChange={(e) => setAr(Number(e.target.value))}
        />
        <input
          type="text"
          placeholder="Adja meg a leirasat: "
          onChange={(e) => setLeiras(e.target.value)}
        />
        <input
          type="text"
          placeholder="Adja meg az imageurl-t: "
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </p>
      <button onClick={modositas}>Pizza módosítása</button>
      <Link to={`/pizzak`}>
        <button>Vissza a főoldalra</button>
      </Link>
    </>
  );
}

export default ModifyPizza;
