import React from "react";
import {Link,broswerHistory} from "react-router";

class Nav extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {
            active:props.type || "sale"
        }
    }
    change(type){
        this.setState({
            active:type
        })
    }
    render(){
        let active = this.state.active;
        return (
                <div id="footer">
                    <Link to="/sale" className={active=='sale'?'active':''}>
                        <i className="iconfont icon-biaoqian"></i>
                        今日特卖
                    </Link>
                    <Link to="/group" className={active=='group'?'active':''}>
                        <i className="iconfont icon-houtai_yingxiao_pintuan"></i>
                        拼团
                    </Link>
                    <Link to="/new" className={active=='new'?'active':''}>
                        <i className="iconfont icon-eyek"></i>
                        逛新品
                    </Link>
                    <Link  to="/car" className={active=='car'?'active':''}>
                        <i className="iconfont icon-gouwuche1"></i>
                        购物车
                    </Link>
                    <Link  to="/mine" className={active=='mine'?'active':''}>
                        <i className="iconfont icon-wode"></i>
                        我的
                    </Link>
                </div>
            )
    }
}

export default Nav