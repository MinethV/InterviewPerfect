import './App.css';
import { Home } from './pages/Home';  //importing Home page from pages
<<<<<<< Updated upstream
import { BrowserRouter, Route, Routes } from 'react-router-dom';
=======
// import { Review } from './pages/Review';  //importing Home page from pages
import { Route, Routes } from 'react-router-dom';
import {Login} from "./pages/Login";
import Loginbutton from './components/Loginbutton';
import Logoutbutton from './components/Logoutbutton';
>>>>>>> Stashed changes



function App() {
<<<<<<< Updated upstream

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/*Routes for the home page */}
          <Route path='/' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
=======
    return(
  <main className="column">
    <h1>Auth0 Login</h1>
    <>
    <Loginbutton />
    <Logoutbutton />
    </>


  </main>
    )
>>>>>>> Stashed changes
}

export default App;
