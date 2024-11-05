import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import MemeGenerator from './components/MemeGenerator';
//import Chat from './components/Chat';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/MemeGenerator" element={<MemeGenerator />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
