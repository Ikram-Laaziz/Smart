// src/routes/PublicRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import PublicLayouts from '../layouts/PublicLayouts';
import Home from '../pages/Home';
import Formations from '../pages/Formations';
import FormationDetail from '../pages/FormationDetail';
import Contact from '../pages/Contact';
import Inscription from '../pages/Inscription';
import Connexion from '../pages/Connexion';
export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayouts />}>
        <Route index element={<Home />} />
        <Route path='formations' element={<Formations/>}/>
        <Route path="/formations/:id" element={<FormationDetail />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/inscription" element={<Inscription/>}/>
        <Route path="/connexion" element={<Connexion/>}/>
      </Route> 
    </Routes>
  );
}
