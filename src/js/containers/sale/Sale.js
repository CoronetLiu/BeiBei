import React from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "../../common/Nav";


class Sale extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
                <div id="all">
                    <Header/>
                    <Main/>
                    <Nav type="sale"/>
                </div>
            )
    }
}

export default Sale