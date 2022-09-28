import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Template from './pages/Template';
import Home from './pages/Home';
import Create from './pages/Create';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/template" element={<Template />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
