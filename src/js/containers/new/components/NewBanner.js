

import React from 'react'
import fetch from "../../../fetch"


class NewBanner extends React.Component {
	constructor(props,context){
		super(props,context)
		this.state={
			NewNav:[]
		}
	}
	getNewNav(){
		fetch.get('http://localhost:8000/public/data/newHotSearch.json').then((res)=>{
			//console.log(res.json())
			return res.json()
		}).then((data)=>{
			//console.log(data)
			this.setState({
				NewNav:data
			})
		})
		
	}
	showNewSearch(){
		return this.state.NewNav.map((item,i)=>{
			return <div className="swiper-slide banner-slide-z" key={item.id}>{item.word}</div>
		})
	}
	componentWillMount(){
		this.getNewNav()
	}
	render(){
		return (			
				<div className="swiper-container new-search-z">
					<div className="swiper-wrapper new-banner-z">
						{this.showNewSearch()}
					</div>
				</div>				
			
			)
	}

	componentDidMount(){
		this.Swiper = new Swiper(".new-search-z",{
            freeMode : true,
            slidesPerView : 'auto',
            freeModeSticky : true ,
            freeModeMomentumRatio:0.2
        })
		
	}

	componentDidUpdate(){
        this.Swiper.update()
    }

}

export default NewBanner