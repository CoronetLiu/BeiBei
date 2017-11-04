import React from "react";

import {connect} from 'react-redux'

import {browserHistory} from "react-router"

import {bindActionCreators} from "redux"

import actionCreator from '../../../redux/actionCreator'


class MineInfo extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        // console.log(this.props)
        return (
                <div id="info-box-c">
                    <div className="info-header-c">
                        用户：{this.props.userInfo.userID}
                    </div>
                    <ul className="info-main-c">
                        <li>个人资料</li>
                        <li>个人资料</li>
                        <li>个人资料</li>
                        <li>个人资料</li>
                        <li>个人资料</li>
                    </ul>
                </div>
            )
    }

}

let mapStateToProps = state=>{
    return {
        state
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        actions:bindActionCreators(actionCreator,dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(MineInfo)