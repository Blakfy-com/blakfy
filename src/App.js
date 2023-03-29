import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Services from './Components/Pages/Services';
import Signup from './Components/Pages/Signup';
import SignIn from './Components/Pages/SignIn';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/About" element={<About />} />
                <Route exact path="/Contact" element={<Contact />} />
                <Route exact path="/Services" element={<Services />} />
                <Route exact path="/Singup" element={<Signup />} />
                <Route exact path="/Singin" element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
