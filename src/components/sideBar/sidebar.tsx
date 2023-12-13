import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars,faXmark} from '@fortawesome/free-solid-svg-icons'
import {SidebarData} from "../sideBar/sidebarData"
import "../sideBar/sidebar.css"


// const Navbar = styled.div`
//     display: flex;
//     justify-content: start;
//     align-items: center;
//     height: 3.5rem;
//     background-color: #f7f6f2;
// `

const SidebarMenu = styled.div`
    width: 233px;
    height: 100vh;
    background-color: #f7f6f2;
    position: fixed;
    top: 0;
    left:'-100%';
    transition: .6s;
    border-width: thick;
`

const MenuItems = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 90px;
    padding: 1rem 0 1.25rem;
`

const MenuItemLinks = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0 2rem;
    font-size: 20px;
    text-decoration: none;
    color: #000000;

    &:hover {
        background-color: #42d415;
        color: #000080;
        width: 100%;
        height: 45px;
        text-align: star;
        border-radius: 5px;
        margin: 0 1rem;
    }
    `


   

    const Sidebar: React.FunctionComponent = () => {
        return (
            <div className="NavBar" >
                    <SidebarMenu>
                    <h3> Company Admin</h3>
                    <span className='text-secondary ms-4'>OVERVIEW</span>
                    {SidebarData.map((item, index) => {
                        return (
                            <MenuItems key={index}>
                                <MenuItemLinks to={item.path}>
                                    {item.icon}
                                    <span style={{marginLeft: '16px'}}>{item.title}</span>
                                </MenuItemLinks>
                            </MenuItems>
                        )
                    })}
                    </SidebarMenu>

            </div>  

        )
    }
    
    export default Sidebar