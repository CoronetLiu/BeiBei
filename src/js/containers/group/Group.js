import React from "react";

import Nav from "../../common/Nav";



class Group extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
                <div id="all">
                    GROUP部分
                    <Nav type="group"/>
                </div>
            )
    }
}

export default Group