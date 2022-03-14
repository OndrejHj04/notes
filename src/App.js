import React from "react";
import Sidebar from './Sidebar'
import Content from './Content'


export default function App(){

    return(
        <div className="app">
            <Sidebar />
            <Content />
        </div>
    )
}