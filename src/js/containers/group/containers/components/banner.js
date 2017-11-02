import React from "react";
import axios from 'axios'
class Banner extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
        	banners:[]
        }
    }
    getBanner(){
    	axios.get("https://dsapi.beibei.com/ads/h5.html?ad_id=14&app=beibei&user_tag=2147483646&uid=").then((res)=>{
    		console.log(res.data.h5_pintuan_icon_shortcuts)
    		this.setState({
    			banners:res.data.h5_pintuan_icon_shortcuts
    		})
    	})
    }
    componentWillMount(){
    	this.getBanner()
    }
    showBanner(){
    	return this.state.banners.map((item,i)=>{
    		return (<a className="banner_item_yl" key={item.rid}>
    			<img src={item.img}/>
    			<p>{item.title}</p>
    		</a>)
    	})
    }
    render(){
        return (
				<div className="banner_box_yl">
					{this.showBanner()}
				</div>
            )
    }
}

export default Banner