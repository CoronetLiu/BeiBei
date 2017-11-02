import React from "react";
import axios from 'axios'
class Banner extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    showBanner(){
    	axios.get("https://dsapi.beibei.com/ads/h5.html?ad_id=14&app=beibei&user_tag=2147483646&uid=")
    }
    componentWillMount(){
    	this.getBanner()
    }
    render(){
        return (
				<div claaName="banner_box_yl">
					
				</div>
            )
    }
}

export default Banner