import { Link, useParams } from "react-router";
import apiClient from "../api/apiClient";

function DeletePizza() {
  const { id } = useParams();

  const torles = () => {
    apiClient
      .delete(`/pizzak/${id}`)
      .then((response) => {
        switch (response.status) {
          case 204:
            console.log("User deleted successfully");
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
  };

  return (
    <>
      <button onClick={torles}>Pizza törlése</button>
      <Link to={`/pizzak`}>
        <button>Vissza a főoldalra</button>
      </Link>
    </>
  );
}

export default DeletePizza;
