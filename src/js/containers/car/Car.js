import React from "react";

import Nav from "../../common/Nav";



class Car extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
                <div id="all">
                    CAR部分
                    <Nav type="car"/>
                </div>
            )
    }
}

export default Car