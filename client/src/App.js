import './App.css';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Error from './pages/erro404/error'
import Dashboard from './pages/dashboard/Dashboard'
import ContactForm from './pages/ContactForm/ContactForm'
import AllProducts from './pages/dashboard_allProducts/AllProducts'
import AddCake from './pages/addCake/AddCake'
import { Routes, Route } from 'react-router-dom';
import Details from './pages/Details/Details';
import Register from './pages/Register/Register';
import "bootstrap/dist/css/bootstrap.min.css";
import CategoryPage from './pages/CategoryPage/CategoryPage';
import FlavourPage from './pages/FlavourPage/FlavourPage';
import Cart from './pages/Cart/Cart';


function App() {
  return (
    <>
      <Routes>

        <Route exact path="/" element={<Home />} />

        <Route exact path="/home" element={<Home />} />

        <Route exact path="/about" element={<About />} />

        <Route exact path="/category/:tag" element={<CategoryPage />} />

        <Route exact path="/cake/:flavour" element={<FlavourPage />} />

        <Route exact path="/dashboard" element={<Dashboard />} />

        <Route exact path="/register" element={<Register />} />

        <Route exact path="/dashboard/allProducts" element={<AllProducts />} />

        <Route exact path="/dashboard/addCake" element={<AddCake />} />

        <Route exact path="/details/:id" element={<Details />} />

        <Route path="*" element={<Error />} />

        <Route path="/contact" element={<ContactForm />} />

        <Route path="/cart" element={<Cart/>} />

      </Routes>
    </>
  );
}

export default App;
