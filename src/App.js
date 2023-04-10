import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Services from './Components/Pages/Services/Services';
import Signup from './Components/Pages/Sign/Signup';
import Signin from './Components/Pages/Sign/Signin';
import Login from './Components/Pages/Sign/Login';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/About" element={<About />} />
                <Route exact path="/Contact" element={<Contact />} />
                <Route exact path="/Services" element={<Services />} />
                <Route exact path="/Singup" element={<Signup />} />
                <Route exact path="/Login" element={<Login />} />
                <Route exact path="/Signin" element={<Signin />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
