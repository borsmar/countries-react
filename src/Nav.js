import React, {Component} from "react";
import { NavLink } from 'react-router-dom'

class Nav extends Component{
    
    render(){
        return(
            <div class="topnav">
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/countries">Countries</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        )
    }

}

export default Nav;