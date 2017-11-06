import React from "react";

import Nav from "../../common/Nav";

import CarBox from "./components/CarBox";

class Car extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
                <div id="all">
                    <CarBox/>
                    <Nav type="car"/>
                </div>
            )
    }
}

export default Car