import './App.css';
import { Home } from './pages/Home';  //importing Home page from pages
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import firebase from '../../firebase';


function App() {
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
}

export default App;
