import React from "react";
import Header from "./components/header"
import Footer from "./components/footer"
import Nav from "./components/nav"
import Banner from "./components/banner"
import Main from "./components/Main"

class TodayHot extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
				<div className="th_index_yl">
					<div className="index_main_yl">
						<Header/>
						<Nav/>
						<Banner/>
						<Main/>
					</div>
					<Footer type="today"/>
				</div>
            )
    }
}

export default TodayHot