// import Landing_76 from "./pages/Landing_76";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { Landing_76, Dashboard_76, Register_76, Error_76 } from "./pages";

function App_76() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard_76 />} />
                <Route path='/landing' element={<Landing_76 />} />
                <Route path='/register' element={<Register_76 />} />
                <Route path='/error' element={<Error_76 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App_76;
