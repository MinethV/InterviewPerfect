import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import { Home } from './pages/Home';  //importing Home page from pages
import { Industry } from './pages/Industry';  //importing Home page from pages
// import { Review } from './pages/Review';  //importing Home page from pages
import { Route, Routes } from 'react-router-dom';




function App() {
    return(
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/review" element={<Home/>}/>
                <Route path="/industry" element={<Industry/>}/>
              
            </Routes>
            <Footer />
        </>
    )
}

export default App;
