import React, {useState} from 'react'
import "./Sidebar.css";
import {
  LineStyle,
  Close,
} from "@material-ui/icons";
import { Router,Link } from "react-router-dom";
import { SidebarLinkDataD } from "./SidebarLinkData";

export default function Sidebar() {
    const [sidebar,setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
    <div className="sidebar">
        <Link to="#" className='menu-bars'>
            <LineStyle onClick={showSidebar}/>
        </Link>
    </div>
        <nav className = {sidebar ? 'sidebarList active' : 'sidebarList'}>
                    <ul className = "sidebarListItems">
                        <li className = "sidebar-toggle">
                            <Link to='#' className='menu-exit-cont'>
                                <Close className ='menu-exit' onClick={showSidebar}/>
                            </Link>
                        </li>
                        {SidebarLinkDataD.map((item , index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path} onClick={showSidebar}>
                                        <span>{item.title}</span>
                                        
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
            
        </nav>
    </>
  );
}

