import './App.css';
import NavBar from './components/NavBar';
import {Home} from './pages/Home';
import {Industry} from './pages/Industry';
import {SoftwareEngineering} from './pages/softwareengineering';
import {CivilEngineering} from './pages/civilengineering';
import {UIUX} from './pages/uiux';
import {HumanResources} from './pages/humanresources';
import {Feedback} from './pages/Feedback';
import {useState} from 'react'; // Import useState hook
import Cameratest from './pages/camertest';
import FillerPercentagePage from './pages/fillerpercentage';
import {SpeechToText} from './pages/sppechtest';
import {Route, Routes} from 'react-router-dom';
import Footer from "./components/Footer";
import {Profile} from "./components/Profile";
import AboutUs from "./pages/AboutUs";

function App() {
    const [askedQuestions, setAskedQuestions] = useState([]); // Define state for askedQuestions
    const [fillerPercentage, setFillerPercentage] = useState(null);

    return (
        <>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/review" element={<Home/>}/>
                <Route path="/industry" element={<Industry/>}/>
                <Route path="/feedback" element={<Feedback/>}/>
                <Route path="/softwareengineering" element={<SoftwareEngineering/>}/>
                <Route path="/civilengineering" element={<CivilEngineering/>}/>
                <Route path="/uiux" element={<UIUX/>}/>
                <Route path="/cameratest" element={<Cameratest/>}/>
                <Route path="/speechtest" element={<SpeechToText/>}/>
                <Route path="/fillerpercentage" element={<FillerPercentagePage/>}/>
                <Route path="/humanresources" element={<HumanResources
                    setAskedQuestions={setAskedQuestions}/>}/> {/* Pass setAskedQuestions as prop */}
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/about" element={<AboutUs/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App;
