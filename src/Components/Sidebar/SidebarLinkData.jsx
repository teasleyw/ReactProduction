import React from 'react'
import "./Sidebar.css";
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
  } from "@material-ui/icons";
  import { Link } from "react-router-dom";

export const SidebarLinkDataD = [ 
    {
        title: 'Welcome',
        path: '/Welcome',
        icon: <LineStyle/>,
        cName: 'sidebarListText'

    },
    {
        title: 'Testing',
        path: '/Testing',
        icon: <AttachMoney/>,
        cName: 'sidebarListText'
    },
    {
        title: 'Log In',
        path: '/LogIn',
        icon: <AttachMoney/>,
        cName: 'sidebarListText'
    },
    {
        title: 'Timeline',
        path: '/Timeline',
        icon: <AttachMoney/>,
        cName: 'sidebarListText'
    }
]