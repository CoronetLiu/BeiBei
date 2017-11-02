import React from "react";
class Header extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
				<div>
					<div className="search_box_yl">
						<div className="search_yl">
							<span className="mirror_yl"></span>
							<span className="logo_yl"></span>
							<span className="tip_yl">搜索热销商品</span>
						</div>
					</div>
					
				</div>
            )
    }
}

export default Header