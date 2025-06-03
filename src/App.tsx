import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Labs from './Labs';
import Kambaz from './Kambaz';
import Project from './Project';
import store from "./Kambaz/store";
import { Provider } from "react-redux";


function App() {
  return (
    <HashRouter>
      <Provider store = {store}>
        <div>
          <Routes>
            <Route path='/' element={<Navigate to="/Labs" />} />
            <Route path="/Kambaz/*" element={<Kambaz />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/Labs/*" element={<Labs />} />
          </Routes>
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App
