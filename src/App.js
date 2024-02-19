import './App.css';
import NavBar from './components/NavBar';
import { Home } from './pages/Home';  //importing Home page from pages
// import { Review } from './pages/Review';  //importing Home page from pages
import { Route, Routes } from 'react-router-dom';
import {Login} from "./pages/Login";



function App() {
    return(
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/review" element={<Home/>}/>
                <Route path="/Login" element={<Login/>}/>
            </Routes>
        </>
    )
}

export default App;
