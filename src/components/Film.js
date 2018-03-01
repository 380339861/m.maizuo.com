import React, {Component} from 'react';
import {BrowserRouter as Router, Link, NavLink, Route, Redirect, Prompt, Switch} from 'react-router-dom';
import axios from "axios"
import Upcoming from "./Upcoming"
import Hit from "./Hit"
import "../css/filmMovie.css"



const Film = ({ match }) => (
  <div>
    <ul className="filmMovie">
      <li>
        <NavLink exact activeClassName="filmactive" to={`${match.url}`}>
          正在热映
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="filmactive" to={`${match.url}/upcoming`}>
           即将上映
        </NavLink>
      </li>
    </ul>
	<div>
	    <Route exact path={`${match.path}`} component={Hit}/>
	    <Route path={`${match.path}/upcoming`} component={Upcoming}/>
    </div>
  </div>
)

export default Film;