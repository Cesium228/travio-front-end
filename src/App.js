import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/home";
import Login from "./views/login";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/registration" element={<Login />}/>
            <Route path="/o-projekte" element={<Login />}/>
            <Route path="/spisok-pererabotchikov" element={<Login />}/>
            <Route path="/interaktivnaya-karta" element={<Login />}/>
            <Route path="/ekotovari" element={<Login />}/>
            <Route path="/faq" element={<Login />}/>
            <Route path="/novosti" element={<Login />}/>
            <Route path="/kontakty" element={<Login />}/>
        </Routes>
    );
}

export default App;
