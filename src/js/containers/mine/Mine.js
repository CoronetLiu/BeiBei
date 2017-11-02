import React from "react";

import Nav from "../../common/Nav";
import Login from "./components/Login";



class Mine extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
                <div id="all">
                    <Login/>
                    <Nav type="mine"/>
                </div>
            )
    }
}

export default Mine