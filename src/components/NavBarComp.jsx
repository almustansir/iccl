import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const NavBar = styled.div`
    position: relative;
    margin: 0px 100px 0px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const NavLogo = styled.h3`
    margin: 10px 10px 10px 10px;
    font-family: 'Pacifico', cursive;
    color: #f1f8fd;
    font-size: 48px;
`
    
const NavUi = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #f1f8fd7e;
    display: flex;
    border-radius: 8px;
    font-family: 'Roboto', sans-serif;
`

const NavBarComp = () => {

    const navlinkStyle = ({ isActive }) => {
        return {
            display: 'block',
            color: isActive ? '#fff' : '#1e1e1e',
            textAlign: 'center',
            padding: '20px 30px',
            textDecoration: 'none',
            background: isActive ? '#6988DB' : '#f1f8fd7e',
        }
    }

  return (
    <NavBar>
        <NavLogo>ICCL</NavLogo>
        <NavUi>
            <NavLink style={navlinkStyle} to="/">Home</NavLink>
            <NavLink style={navlinkStyle} to="/aboutus">About Us</NavLink>
            <NavLink style={navlinkStyle} to="/csr">CSR</NavLink>
            <NavLink style={navlinkStyle} to="/partners">Partners</NavLink>
            <NavLink style={navlinkStyle} to="/gallery">Gallery</NavLink>
            <NavLink style={navlinkStyle} to="/contact">Contact</NavLink>
        </NavUi>
    </NavBar>
  )
}

export default NavBarComp