import React, { useState } from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements";

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return(
        <>
        <Nav>
            <NavLink to='/' activeStyle>
                <img src={"/logo.svg"} alt="logo"/>
            </NavLink>
            <Bars onClick={showSidebar} />
            <NavMenu className={sidebar ? 'navMenuActive' : ''}>
                <NavLink to='/announcement' activeStyle>Announcement</NavLink>
                <NavLink to='/gallery' activeStyle>Gallery</NavLink>
                <NavLink to='/blog' activeStyle>Blog</NavLink>
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