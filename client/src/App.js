import './App.css';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Error from './pages/erro404/error'
import Dashboard from './pages/dashboard/Dashboard'
import AllProducts from './pages/dashboard_allProducts/AllProducts'
import AddCake from './pages/addCake/AddCake'
import { Routes, Route } from 'react-router-dom';
import Details from './pages/Details/Details';

function App() {
  return (
    <>
      <Routes>

        <Route exact path="/" element={<Home />} />

        <Route exact path="/home" element={<Home />} />

        <Route exact path="/about" element={<About />} />

        <Route exact path="/dashboard" element={<Dashboard />} />

        <Route exact path="/dashboard/allProducts" element={<AllProducts />} />

        <Route exact path="/dashboard/addCake" element={<AddCake />} />

        <Route exact path="/details/:id" element={<Details />}/>

        <Route path="*" element={<Error />} />

      </Routes>
    </>
  );
}

export default App;
