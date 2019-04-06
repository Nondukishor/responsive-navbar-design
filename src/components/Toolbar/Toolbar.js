import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';


const navbarStyle={
  toolbar:{
    background: 'green'
  }
}


const Toolbar = props => (
  <header className="toolbar"  style={navbarStyle.toolbar}>
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/">THE LOGO</a></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
            <ul>
                <li><a href="/">Products</a></li>
                <li><a href="/">Users</a></li>
            </ul>
        </div>
    </nav>
  </header>
);

export default Toolbar;