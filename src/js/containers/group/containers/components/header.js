import React from "react";
import {Link} from 'react-router'
class Header extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
				<Link to="/search">
					<div className="search_box_yl">
						<div className="search_yl">
							<span className="mirror_yl"></span>
							<span className="logo_yl"></span>
							<span className="tip_yl">搜索热销商品</span>
						</div>
					</div>
					
				</Link>
            )
    }
}

export default Header