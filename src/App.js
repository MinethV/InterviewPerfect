import './App.css';
import NavBar from './components/NavBar';
import { Home } from './pages/Home';  //importing Home page from pages
import { Industry } from './pages/Industry';  //importing Home page from pages

import { SoftwareEngineering } from './pages/softwareengineering';
import { CivilEngineering } from './pages/civilengineering';
import { UIUX } from './pages/uiux';
import { HumanResources } from './pages/humanresources';



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
          

                <Route path="/softwareengineering" element={<SoftwareEngineering/>}/>
                <Route path="/civilengineering" element={<CivilEngineering/>}/>
                <Route path="/uiux" element={<UIUX/>}/>
                <Route path="/humanresources" element={<HumanResources/>}/>

             
                
              
            </Routes>
        </>
    )
}

export default App;
