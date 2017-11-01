import React from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "../../common/Nav";

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreator from '../../redux/actionCreator'

class Sale extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
                <div id="all">
                    <Header/>
                    <Main/>
                    <Nav type="sale"/>
                </div>
            )
    }
}


export default connect(state=>state,(dispatch)=>{
    return {
        actions:bindActionCreators(actionCreator,dispatch)
    }
})(Sale)