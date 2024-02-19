import './App.css';
import NavBar from './components/NavBar';
import { Home } from './pages/Home';  //importing Home page from pages
// import { Review } from './pages/Review';  //importing Home page from pages
import { Route, Routes } from 'react-router-dom';

import Loginbutton from './components/Loginbutton';
import Logoutbutton from './components/Logoutbutton';



function App() {
    return(
  <main className="column">
    <h1>Auth0 Login</h1>
    <>
    <Loginbutton />
    <Logoutbutton />
    </>


  </main>
    )
}

export default App;
