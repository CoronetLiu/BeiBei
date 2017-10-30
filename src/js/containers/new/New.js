import React from "react";

import Nav from "../../common/Nav";



class New extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
                <div id="all">
                    NEW部分
                    <Nav type="new"/>
                </div>
            )
    }
}

export default New