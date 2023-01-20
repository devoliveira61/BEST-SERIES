import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Series from './pages/Series';


function RoutesApp() {
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/serie/:id" element={<Series/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;