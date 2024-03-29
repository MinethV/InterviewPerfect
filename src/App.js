import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import { Home } from './pages/Home';  //importing Home page from pages
import { Industry } from './pages/Industry';  //importing Home page from pages
import Callback from './Callback';
import { Route, Routes } from 'react-router-dom';




function App() {
    return(
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/review" element={<Home/>}/>
                <Route path="/industry" element={<Industry/>}/>
                <Route path="/callback" element={<Callback/>}/>
            </Routes>
            <Footer />
        </>
    )
}

export default App;
