import React from "react";

import Nav from "../../common/Nav";
import TodayHot from "./containers/todayHot"


class Group extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
                <div id="all">
                    <TodayHot/>
                </div>
            )
    }
}

export default Group