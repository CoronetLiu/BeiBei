import React from "react";

import Nav from "../../common/Nav";



class Mine extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
                <div id="all">
                    MINE部分
                    <Nav type="mine"/>
                </div>
            )
    }
}

export default Mine