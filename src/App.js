import './App.css';
import NavBar from './components/NavBar';
import {Home} from './pages/Home';  //importing Home page from pages
import {Industry} from './pages/Industry';  //importing Home page from pages
import AboutUs from './pages/AboutUs';  //importing Home page from pages
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from "./components/Footer";
import {Profile} from "./components/Profile";

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/review" element={<Home/>}/>
                    <Route path="/industry" element={<Industry/>}/>
                    <Route path="/about" element={<AboutUs/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default App;