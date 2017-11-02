import React from "react";


class Login extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
                <div id="login-box-c">
                    <form id="login-form-c">
                        <label>
                            <i className="iconfont icon-wode"></i>
                            <input type="text" placeholder="请输入手机号码" />
                        </label>
                        <label>
                            <i className="iconfont icon-suozi"></i>
                            <input type="password" placeholder="请输入密码"/>
                        </label>
                        <label>
                            <input type="text" placeholder="请输入4位验证码"/>
                            <span className="yzm-c">1234</span>
                        </label>
                        <button type="submit" id="login-btn-c">立即登录</button>
                    </form>
                </div>
            )
    }
}

export default Login