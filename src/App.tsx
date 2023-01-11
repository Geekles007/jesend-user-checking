import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import RootLayout from "./layouts/root-layout";
import HomePage from "./pages/home";
import AcceptPage from "./pages/accept";
import DocumentTypePage from "./pages/document-type";
import Testing from "./pages/testing";

function App() {
    return (
        <div className="h-screen">
            <Routes>
                <Route path={"/"} element={<RootLayout/>}>
                    <Route index element={<HomePage />}/>
                    <Route path={"accept"} element={<AcceptPage />}/>
                    <Route path={"document-type"} element={<DocumentTypePage />}/>
                    <Route path={"testing"} element={<Testing />}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
