import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars,faXmark} from '@fortawesome/free-solid-svg-icons'
import {SidebarData} from "../sideBar/sidebarData"

// const Navbar = styled.div`
//     display: flex;
//     justify-content: start;
//     align-items: center;
//     height: 3.5rem;
//     background-color: #c1c1cb;
// `

const SidebarMenu = styled.div`
    width: 250px;
    height: 100vh;
    background-color: #c1c1cb;
    position: fixed;
    top: 0;
    left:'-100%';
    transition: .6s;
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
    color: #ffffff;

    &:hover {
        background-color: #ffffff;
        color: #000080;
        width: 100%;
        height: 45px;
        text-align: center;
        border-radius: 5px;
        margin: 0 2rem;
    }
    `


   

    const Sidebar: React.FunctionComponent = () => {
        // const [close, setClose] = useState(false)
        // const showSidebar = () => setClose(!close)
        return (
            <>
                <nav>
                    {/* <MenuIconOpen to="#" onClick={showSidebar}>
                    <FontAwesomeIcon icon={faBars} />
                    </MenuIconOpen> */}
                    <SidebarMenu>
                        <h3>Company Admin</h3>
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
                    
                </nav>
    
                
            </>
        )
    }
    
    export default Sidebar