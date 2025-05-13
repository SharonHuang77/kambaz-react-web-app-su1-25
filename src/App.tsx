import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Labs from './Labs';
import Kambaz from './Kambaz';
import Project from './Project';


function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path='/' element={<Navigate to="/Labs" />} />
          <Route path="/Kambaz/*" element={<Kambaz />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Labs/*" element={<Labs />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App
