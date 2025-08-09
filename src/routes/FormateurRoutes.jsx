import { Routes, Route } from "react-router-dom";
import FormateurLayouts from "../layouts/FormateurLayouts";
import DashboardFormateur from "../roles/formateur/DashboardFormateur";
import GestionParticipants from "../roles/formateur/GestionParticipants";
import GestionContenu from "../roles/formateur/ContenuPedagogique/GestionContenu";
import AjouterContenu from "../roles/formateur/ContenuPedagogique/AjouterContenu";
import ListeContenus from "../roles/formateur/ContenuPedagogique/ListeContenus";

export default function FormateurRoutes() {
    return (
        <Routes>
         
  <Route path="/" element={<FormateurLayouts />}>
    <Route index element={<DashboardFormateur />} />
    <Route path="participants" element={<GestionParticipants />} />
    <Route path="contenu" element={<GestionContenu />}>
      <Route index element={<AjouterContenu />} />
      <Route path="ajouter" element={<AjouterContenu />} />
      <Route path="liste" element={<ListeContenus />} />
    </Route>
  </Route>

           
        </Routes>
    );
} 