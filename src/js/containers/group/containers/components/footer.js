import React from "react";
import {Link} from "react-router"
class Footer extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
				<div className="footer_yl">
					<a className="active_yl">
						<i className="iconfont icon-biaoqian"></i>
						<p>今日热团</p>
					</a>
					<Link to="saleHot">
						<i className="iconfont icon-xin"></i>
						<p>热销榜</p>
					</Link>
					<Link to="mine">
						<i className="iconfont icon-wode"></i>
						<p>我的拼团</p>
					</Link>
				</div>
            )
    }
}

export default Footer