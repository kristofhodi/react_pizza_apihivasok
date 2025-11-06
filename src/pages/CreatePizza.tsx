import { useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient from "../api/apiClient";

function CreatePizza() {
  const [nev, setNev] = useState<string>("");
  const [ar, setAr] = useState<number>(0);
  const [leiras, setLeiras] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");

  const pizza: Pizza = {
    nev,
    leiras,
    imageUrl,
    ar,
  };

  const kuldes = () => {
    apiClient
    .post("/pizzak", pizza)
    .then((response) => {
      switch (response.status) {
        case 201:
          console.log("Pizza created successfully");
          break;
        case 400:
          console.error("Bad request");
          break;
        default:
          console.error("An error occurred");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }
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
      <button onClick={kuldes}>Pizza hozzáadása</button>
    </>
  );
}

export default CreatePizza;
