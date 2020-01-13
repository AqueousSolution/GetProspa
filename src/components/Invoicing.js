import React from 'react';
import Navigation from './Navigation';
import AccountContainer from './AccountContainer'
import {NavLink} from 'react-router-dom';

const Invoicing=()=>{
return(
    <div>
    <Navigation />
    <div className="MainContent">
    <h1>All Invoices</h1>
    </div>
    </div>
)

}
export default Invoicing