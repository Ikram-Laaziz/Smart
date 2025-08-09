import { Routes,Route } from "react-router-dom"
import ApprenantLayouts from "../layouts/AprennantLayouts"
import FormationsDisponibles from "../roles/apprenant/formationsDisponibles"
import MesFormations from "../roles/apprenant/MesFormations"
import DashboardApprenant from "../roles/apprenant/DashboardApprenant"
export default function ApprenantRoute(){
    return(
        <Routes>
          <Route path='/' element={<ApprenantLayouts/>}>
           <Route index element={<DashboardApprenant/>}/>
           <Route path="/formationsDisponibles" element={<FormationsDisponibles/>}/>
           <Route path="mesFormations" element={<MesFormations/>}/>
           </Route>
        </Routes>
    )
}