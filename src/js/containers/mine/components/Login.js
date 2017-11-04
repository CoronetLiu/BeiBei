import React from "react";

import {connect} from 'react-redux'

import {browserHistory} from "react-router"

import {bindActionCreators} from "redux"

import actionCreator from '../../../redux/actionCreator'

class Login extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    login(e){
<<<<<<< HEAD
//      console.log(this.refs.userID.value)
=======
>>>>>>> cc483c17a0ea8badbceeb0427ba6e4a7461a0ac2
        e.preventDefault();
        this.props.actions.login_c({
            status:'login',
            userID:this.refs.userID.value,
            password:this.refs.password.value
        },function(){
            browserHistory.push('/sale')
        })

    }
    render(){
        // console.log(this.props)
        return (
                <div id="login-box-c">
                    <form id="login-form-c"  onSubmit={this.login.bind(this)}>
                        <label>
                            <i className="iconfont icon-wode"></i>
                            <input type="text" placeholder="请输入手机号码" ref="userID"/>
                        </label>
                        <label>
                            <i className="iconfont icon-suozi"></i>
                            <input type="password" placeholder="请输入密码" ref="password"/>
                        </label>
                        <label>
                            <input type="text" placeholder="请输入4位验证码"/>
                            <span className="yzm-c">1234</span>
                        </label>
                        <button id="login-btn-c">立即登录</button>
                    </form>
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


export default connect(mapStateToProps,mapDispatchToProps)(Login)