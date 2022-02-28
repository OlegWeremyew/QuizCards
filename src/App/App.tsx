import React from 'react';

import './App.css';
import {RoutesComponent} from "./RoutesComponent/RoutesComponent";
import {Header} from "../component/Header/Header";

function App() {
    return (
        <div>
            <Header/>
            <RoutesComponent/>
        </div>
    );
}

export default App;
