import React, { Component } from 'react';
import '../App.css';
import axios from "axios"
import Swiper from "swiper"
import {Link} from 'react-router-dom';

export default class Lunbo extends Component {
	constructor(){
		super();
		this.state = {
     		list: [],
     		lunbolist:[],
     		page:0
   		}
		this.btnajax = this.btnajax.bind(this)
	}
	
	componentDidMount(){
		axios.get('/v4/api/billboard/home?__t=1516854302464')
		  .then((response)=>{
		    console.log(response);
		    this.state.lunbolist = response.data.data.billboards
		    this.setState({
		    	lunbolist:this.state.lunbolist
		    })
		    console.log(this.state.lunbolist)
		    	if(this.state.lunbolist){
			    	var mySwiper = new Swiper('.swiper-container', {
					autoplay: true,//可选选项，自动滑动
					loop : true,
				})
		    }
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
		  
		  axios.get('/v4/api/film/now-playing?__t=1519626948209&page=1&count=5')
			  .then((response)=>{
			    console.log(response);
			    this.state.list = response.data.data.films
			    this.setState({
			    	list : this.state.list
			    })
			  })
			  .catch(function (error) {
			    console.log(error);
		  });
	}
	
	btnajax(){
  			axios.get(`/v4/api/film/now-playing?__t=1519626948209&page=${this.state.page+2}&count=5`)
			  .then((response)=>{
			    console.log(response);
			    this.state.page= this.state.page+1
			    this.setState({
			    	page : this.state.page
			    })
			    this.state.list = this.state.list.concat(response.data.data.films)
			    this.setState({
			    	list : this.state.list
			    })
			    
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
  		}
	
	
	
	render() {
		return (
			<div>
				<div className="swiper-container">
		   			<div className="swiper-wrapper">
			     		{
			     			this.state.lunbolist.map(function(items,index){
			     				return (
			     					<div className="swiper-slide"><li key={items.name}><img src={items.imageUrl} /></li></div>
			     				)
			     			})
			     		}
			  		</div>
				</div> 
				
				
				
				<div className="imglist">
						<ul className="oul-top">
								{
									this.state.list.map(function(item,index){
										return (
												
											<Link to={"/detail/"+item.id}>
												<li key={item.name}>
													<div className="ul-Img">
															<img src={item.cover.origin} alt="" />
													</div>
													<div className="ul-Text">
														<div className="ul-left">
															<div className="header-text">
																{item.name}
															</div>
															<div className="footer-text">
																<Link to={"/detail/"+item.id}>{item.id}</Link>
																<Link to={"/detail/"+item.id}>家影院上映 </Link>
																<Link to={"/detail/"+item.id}>1690624</Link>
																<Link to={"/detail/"+item.id}>{item.watchCount}</Link>
															</div>
														</div>
														<div className="ul-right">
															{item.grade}
														</div>
													</div>
												</li>
										    </Link>	
												
										)
									})
								}
						</ul>
						<div className="oul-top_bottom">
									<p onClick={this.btnajax}>更多热映电影</p>
						</div>
				</div>
			</div>
		)
	}
}
