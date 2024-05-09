import React from 'react';
import {Avatar} from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import Search from './Search';

const Nav = () => {
    return (
        <>
           <div className="header">
               <div className="headerMain">
                   <div className="left">
                       <ul>
                           <li>
                               <a href="#">About</a>
                           </li>
                           <li>
                               <a href="#">Store</a>
                           </li>
                       </ul>
                   </div>
                   <div className="right">
                        <ul>
                           <li>
                               <a href="#">Gmail</a>
                           </li>
                           <li>
                               <a href="#">Images</a>
                           </li>
                           <AppsIcon className="svgIcons" />
                           <Avatar className="svgIcons" />
                       </ul>
                   </div>
               </div>
               <div className="homeBody">
                    <img
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                        alt="logo"
                        className="googleLogo"
                    />
                    <div className="homeInputContainer">
                        <Search />
                    </div>
               </div>
           </div>
        </>
    );
};

export default Nav;