import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PizzakPage from "./pages/PizzakPage.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import PizzaPage from "./pages/PizzaPage.tsx";
import CreatePizza from "./pages/CreatePizza.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/pizzak" element={<PizzakPage />} />
        <Route path="/pizzak/:id" element={<PizzaPage />} />
        <Route path="/pizzacreate" element={<CreatePizza />} />

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
