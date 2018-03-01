import React, { Component } from 'react';
import {BrowserRouter as Router, Link, NavLink, Route, Redirect, Prompt, Switch} from 'react-router-dom';
import './App.css';
import axios from "axios"
import Swiper from "swiper"
import Lunbo from './components/Lunbo';
import Film from './components/Film';
import Detail from './components/Detail';
import DetailMap from './components/DetailMap';
import Cinema from './components/Cinema';

import { DatePicker } from 'antd';
import 'antd/dist/antd.css'
import { Cascader } from 'antd';



class App extends Component {
	constructor(){
		super();
		this.state = {
     		list: [],
     		lunbolist:[],
     		page:0,
     		maps:[],
     		topmaps:[],
     		
     		options : [{
			  value: 'DYC1',
			  label: '浙江',
			  children: [{
			    value: '2',
			    label: '杭州',
			  }],
			}, {
			  value: 'DYC2',
			  label: '北京',
			  children: [{
			    value: '4',
			    label: '朝阳',
			  }],
			}]
     		
     		
   		}
		this.addClick = this.addClick.bind(this)
		this.onChange = this.onChange.bind(this)
	}
	
	addClick(){
		console.log(document.getElementsByClassName("search_left")[0].style.marginLeft)
		if(document.getElementsByClassName("search_left")[0].style.marginLeft == '' ||document.getElementsByClassName("search_left")[0].style.marginLeft == '-302px'){
			document.getElementsByClassName("search_left")[0].style.marginLeft = '302px'
			
		}else if(document.getElementsByClassName("search_left")[0].style.marginLeft == '302px'){
			document.getElementsByClassName("search_left")[0].style.marginLeft = '-302px'
		}
		
	}
	componentDidUpdate(){
		console.log(this.state.topmaps)
	}


	onChange(value){
				console.log(value)
				this.state.topmaps = value
				this.setState({
					topmaps :this.state.topmaps
				})
	}
	render(){
		return(
			<div className="eds">
			<header className="header">
					<div className="logo-left"  onClick={this.addClick}>
						<i className="iconfont icon-qiaquanguanli"></i>
					</div>
					<div className="logo-right">
						<p>卖座电影</p>
						<a href="#">
							<i className="iconfont">&#xe644;</i>
						</a>
						<a href="#">
							<i className="iconfont" id="allmap"><div>
		    <Cascader defaultValue={['DYC2', '朝阳', 'xihu']} options={this.state.options} onChange={this.onChange} className="styles" />
		  </div></i>
						</a>
					</div>
				</header>
				<Router>
					<div>
				        <div className="search_left" ref="search_left">
					          <li><NavLink exact activeClassName="actives" to="/">首页</NavLink></li>
					          <li><NavLink activeClassName="actives" to="/film">影片</NavLink></li>
					          <li><NavLink activeClassName="actives" to="/cinema">影院</NavLink></li>
				        </div>
				        	<Route exact path="/" component={Lunbo} />
				            <Route path="/film" component={Film} />
				            <Route path="/cinema" component={Cinema} />
				            <Route path="/detail/:fid" component={Detail} />
				            <Route path="/detailMap/:fib" component={DetailMap} />
				    </div>
			    </Router>
				
				
				
				
				
			</div>
		)
	}
}

export default App;
