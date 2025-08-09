import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminRoutes from './routes/AdminRoutes';
import FormateurRoutes from './routes/FormateurRoutes';
import ApprenantRoutes from './routes/ApprenantRoutes';
import PublicRoutes from './routes/PublicRoutes';

function App() {
  return (
      <div className="App">
      <Routes>
        {/* Routes publiques */}
        <Route path="/*" element={<PublicRoutes />} />

        {/* Routes privées */}
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/formateur/*" element={<FormateurRoutes />} />
        <Route path="/apprenant/*" element={<ApprenantRoutes />} />

        {/* Redirection en cas de mauvaise URL */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );

}

export default App;
