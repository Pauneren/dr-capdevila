import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Kirkjan from './components/Kirkjan';
import Olafskirkja from './components/Olafskirkja';
import Ingjalsholskirkja from './components/Ingjalsholskirkja';
import Contact from './components/Contact';
import Frettir from './components/Frettir';
import Helgihald from './components/Helgihald';
import Athafnir from './components/Athafnir';
import Aeskulydsstarf from './components/Aeskulydsstarf';
import Safnadarstarf from './components/Safnadarstarf';
import Fermingar from './components/Fermingar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/kirkjan" element={<Kirkjan />} />
          <Route path="/helgihald" element={<Helgihald />} />
          <Route path="/athafnir" element={<Athafnir />} />
          <Route path="/aeskulydsstarf" element={<Aeskulydsstarf />} />
          <Route path="/safnadarstarf" element={<Safnadarstarf />} />
          <Route path="/fermingar" element={<Fermingar />} />
          <Route path="/frettir" element={<Frettir />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/olafskirkja" element={<Olafskirkja />} />
          <Route path="/ingjalsholskirkja" element={<Ingjalsholskirkja />} />
        </Routes>
        <footer>
          <p>© 2026 Olafskirkja og Ingjalsholskirkja</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
