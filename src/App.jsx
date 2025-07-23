import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos';


function App() {
  return (
    <Router>
      {}
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/a-propos" element={<Apropos />} />
        {}
      </Routes>
      {}
    </Router>
  );
}

export default App;
