import React, { useState } from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements";

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return(
        <>
        <Nav>
            <NavLink to='/' activeStyle>
                <img src={"/logo.png"} alt="logo"/>
            </NavLink>
            <Bars onClick={showSidebar} />
            <NavMenu className={sidebar ? 'navMenuActive' : ''}>
                <NavLink to='/releases' activeStyle>News</NavLink>
                <NavLink to='/models' activeStyle>Models</NavLink>
                <NavLink to='/gallery' activeStyle>Gallery</NavLink>
                <NavLink to='/about' activeStyle>About</NavLink>
                <NavLink to='/contact' activeStyle>Contacts</NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/sign-up'>Register</NavBtnLink>
                <NavBtnLink to='/login'>Login</NavBtnLink>
            </NavBtn>
            
        </Nav>
        </>
    );
};

export default Navbar;