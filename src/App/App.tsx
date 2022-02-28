import React from 'react';
import style from "./App.module.css"
import {RoutesComponent} from "./RoutesComponent/RoutesComponent";
import {Header} from "../component/Header/Header";

function App() {
    return (
        <div className={style.appContainer}>
            <div className={style.main}>
                <Header/>
                <RoutesComponent/>
            </div>
        </div>

    );
}

export default App;
