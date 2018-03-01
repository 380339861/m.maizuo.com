import React, {Component} from 'react';
import {BrowserRouter as Router, Link, NavLink, Route, Redirect, Prompt, Switch} from 'react-router-dom';
import axios from "axios"
import "../css/hit.css"

export default class Home extends Component {
	constructor(){
		super();
		this.state={
			movielist:[]
		}
	}
	componentDidMount(){
		axios.get("/v4/api/film/coming-soon?page=1&count=7")
		.then((res)=>{
			console.log(res)
			this.state.movielist = res.data.data.films
			this.setState({
				movielist:this.state.movielist
			})
		})
	}
	
	render() {
		return (
			<div className="film-list">
				<ul className="list-unstyled">
					{
						this.state.movielist.map(function(items,index){
							return(
								<Link to={"/detail/"+items.id}>
									<li key={items.id}>
										<div className="film-item">
										<div className="film-item-img">
										<div className="img-responsive">
										<img src={items.cover.origin}/></div>
										</div>
										<div className="film-desc" >
										<div className="film-next-arrow" >
										<i className="iconfont icon-arrow-right film-next-icon" ></i>
										</div><div className="film-grade">{items.grade}</div>
										<div className="film-name">{items.name}</div>
										<div className="film-intro">{items.intro}</div>
										<div className="film-premiere-date"><span>12月31日上映</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>星期一</span></div>
										</div></div>
									</li>
								</Link>
							)
						})
						
					}
				</ul>
			</div>
		)
	}
}