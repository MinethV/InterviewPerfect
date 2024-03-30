import './App.css';
import NavBar from './components/NavBar';
import { Home } from './pages/Home';
import { Industry } from './pages/Industry';
import { SoftwareEngineering } from './pages/softwareengineering';
import { CivilEngineering } from './pages/civilengineering';
import { UIUX } from './pages/uiux';
import { HumanResources } from './pages/humanresources';
import { Feedback } from './pages/Feedback';
import { useState } from 'react'; // Import useState hook
import { Route, Routes } from 'react-router-dom';

function App() {
    const [askedQuestions, setAskedQuestions] = useState([]); // Define state for askedQuestions
    const [fillerPercentage, setFillerPercentage] = useState(null); 

    return(
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/review" element={<Home/>}/>
                <Route path="/industry" element={<Industry/>}/>
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/softwareengineering" element={<SoftwareEngineering/>}/>
                <Route path="/civilengineering" element={<CivilEngineering/>}/>
                <Route path="/uiux" element={<UIUX/>}/>
                <Route path="/humanresources" element={<HumanResources/>}/> {/* Pass setAskedQuestions as prop */}
            </Routes>
        </>
    )
}

export default App;
