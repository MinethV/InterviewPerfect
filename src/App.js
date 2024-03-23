import './App.css';
import NavBar from './components/NavBar';
import {Home} from './pages/Home';  //importing Home page from pages
import {Industry} from './pages/Industry';  //importing Home page from pages
import AboutUs from './pages/AboutUs';  //importing Home page from pages
import {Route, Routes} from 'react-router-dom';
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/review" element={<Home/>}/>
                <Route path="/industry" element={<Industry/>}/>
                <Route path="/about" element={<AboutUs/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App;
