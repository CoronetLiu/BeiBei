import React from "react";

import Nav from "../../common/Nav";
import Login from "./components/Login";

import {connect} from 'react-redux'


class Mine extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
                <div id="all">
                {
                    this.props.userInfo.userID?<p>用户:{this.props.userInfo.userID}</p>:<Login/>
                }
                    <Nav type="mine"/>
                </div>
            )
    }
}

let mapStateToProps = state=>{
    return {
        userInfo:state.userInfo
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {}
}

export default connect(mapStateToProps,mapDispatchToProps)(Mine)