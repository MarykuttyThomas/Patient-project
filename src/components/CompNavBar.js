import React from 'react';
import { NavLink,Link } from 'react-router-dom'


const CompNavBar = () =>
{


    return(
        <div style={{ backgroundColor:'	5px solid black', color:'#5px solid black'}}>

        <NavLink activeClassName="active" 
        to={"/Patient-Search"} 
        style={{margin:"3px"}}> SEARCH </NavLink>
        
        </div>
    )
}

export default CompNavBar;