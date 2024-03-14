import './App.css';
import NavBar from './components/NavBar';
import { Home } from './pages/Home';  //importing Home page from pages
import { Industry } from './pages/Industry';  //importing Home page from pages
import { QuestionAsk } from './pages/questionAsk';
import { Answer } from './pages/Answer'
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
                <Route path="/askquestions" element={<QuestionAsk/>}/>
                <Route path="/answer" element={<Answer/>}/>
                
              
            </Routes>
        </>
    )
}

export default App;
