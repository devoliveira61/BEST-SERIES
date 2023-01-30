import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Error from './pages/Error';
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
                <Route path="*" element={<Error/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;