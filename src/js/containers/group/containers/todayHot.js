import React from "react";
import Header from "./components/header"
import Nav from "./components/nav"
import Main from "./components/Main"

class TodayHot extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
				<div className="th_index_yl">
					<Header/>
					<Nav/>
					<Main/>
				</div>
            )
    }
}

export default TodayHot