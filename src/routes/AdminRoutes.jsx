
import { Routes,Route } from "react-router-dom";
import GestionFormation from "../roles/admin/formateur/formation/GestionFormation";
import AdminLayouts from "../layouts/AdminLayouts";
import DashboardAdmin from "../roles/admin/DashboardAdmin";
import AjouterFormation from "../roles/admin/formateur/formation/AjouterFormation";
import ListeFormation from "../roles/admin/formateur/formation/ListeFormation";
import GestionFormateur from "../roles/admin/formateur/GestionFormateur";
import AjouterFormateur from "../roles/admin/formateur/AjouterFormateur";
import ListeFormateur from "../roles/admin/formateur/ListeFormateur";
import GestionMessage from "../roles/admin/message/GestionMessage";
import GestionInscription from "../roles/admin/Inscription/GestionIscription";
import AjouterUtilisateur from "../roles/admin/AjouterUtilisateur";
import ListeUtilisateurs from "../roles/admin/ListeUtilisateurs";

export default function AdminRoutes(){
    return(
        <Routes>
          <Route path="/" element={<AdminLayouts/>}>
            <Route index element={<DashboardAdmin/>}/>
            <Route path="formation" element={<GestionFormation />}>
              <Route index element={<AjouterFormation />} />
              <Route path="ajouter" element={<AjouterFormation />} />
              <Route path="lister" element={<ListeFormation />} />
            </Route>
            <Route path='formateur' element={<GestionFormateur/>}>
               <Route index element={<AjouterFormateur/>}/>
               <Route path='lister' element={<ListeFormateur/>}/>
            </Route>
            <Route path="message" element={<GestionMessage />} />
            <Route path="inscription" element={<GestionInscription />} />
            <Route path="ajouter-utilisateur" element={<AjouterUtilisateur />} />
            <Route path="liste-utilisateurs" element={<ListeUtilisateurs />} />
          </Route>
        </Routes>
    )
}