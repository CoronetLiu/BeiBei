import React from "react";

import Nav from "../../common/Nav";



class Detail extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
                <div id="all">
                    DETAIL部分
                    <Nav type="detail"/>
                </div>
            )
    }
}

export default Detail