import React from "react";

import Nav from "../../common/Nav";
import NewHeader from "./components/NewHeader";
import NewMain from "./components/NewMain";

class New extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
                <div id="all">
                    <NewHeader/>
                    <NewMain/>
                    <Nav type="new"/>
                </div>
            )
    }
}

export default New