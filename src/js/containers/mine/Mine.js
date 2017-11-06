import React from "react";

import Nav from "../../common/Nav";
import Login from "./components/Login";
import MineInfo from "./components/MineInfo";

import {Link} from 'react-router'

import {connect} from 'react-redux'

import {bindActionCreators} from "redux"

import actionCreator from '../../redux/actionCreator'

class Mine extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        console.log(this.props)
        return (
                <div id="all">
                {
                    this.props.userInfo.userID?<MineInfo userInfo={this.props.userInfo}/>:<Login/>
                }
                    <Nav type="mine"/>
                </div>
            )
    }

}
// Mine.defaultProps = {
//     userInfo:localStorage.getItem("userInfo")
// }
let mapStateToProps = state=>{
    return {
        userInfo:JSON.parse(localStorage.getItem("userInfo")) || state.userInfo
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        actions:bindActionCreators(actionCreator,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Mine)