import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import RootLayout from "./layouts/root-layout";
import HomePage from "./pages/home";
import AcceptPage from "./pages/accept";
import DocumentTypePage from "./pages/document-type";
import Testing from "./pages/testing";
import PhotoCapture from "./pages/photo-capture";

function App() {
    return (
        <div className="h-screen">
            <Routes>
                <Route path={"/"} element={<RootLayout/>}>
                    <Route index element={<HomePage />}/>
                    <Route path={":lang"} element={<HomePage />}/>
                    <Route path={":lang/:param2"} element={<AcceptPage />}/>
                    <Route path={":lang/:param2/:param3"} element={<DocumentTypePage />}/>
                    <Route path={":lang/:param2/:param3/:param4"} element={<Testing />}/>
                    <Route path={":lang/:param2/:param3/:param4/:param5"} element={<PhotoCapture />}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
