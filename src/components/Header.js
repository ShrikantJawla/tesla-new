import React from 'react'
import styled from 'styled-components'
import logo from '../imagesss/logo.svg'
import Fade from 'react-reveal/Fade';


function Header() {
    const [sidebarState, setSidebarState] = React.useState(false);
    return (
        <Container>
            <Fade top>
                <a href="#">
                    <img src={logo} alt="Logo" />
                </a>
            </Fade>
            <Fade top>
                <Menu>
                    <a href="#">Model S</a>
                    <a href="#">Model 3</a>
                    <a href="#">Model X</a>
                    <a href="#">Model Y</a>
                    <a href="#">Solar Roof</a>
                    <a href="#">Solar panels</a>
                </Menu>
            </Fade>
            <Fade top>
                <RightMenu>
                    <a href="#">Shop</a>
                    <a href="#">Account</a>
                    <i onClick={() => { setSidebarState(true) }} class="fa-solid fa-bars"></i>
                </RightMenu>
            </Fade>
            <Burgernav show={sidebarState}>
                <div>
                    <i onClick={() => { setSidebarState(false) }} class="fa-solid fa-x"></i>
                </div>
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model 3</a></li>
                <li><a href="#">Model Y</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
            </Burgernav>
        </Container>
    )
}

export default Header


const Container = styled.div`
    font-size: 14.5px;
    min-height:60px;
    position:fixed;
    top:0;
    left:0;
    right:0;
    display: flex;
    align-items: center;
    justify-content:space-between;
    padding:0 20px;
    z-index:1;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    flex:1;

    a{
        font-weight:600;
        text-transform:uppercase;
        padding:0 10px;
        flex-wrap:nowrap;
    }
    @media (max-width:768px) {
        display: none;
    }
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a,i{
        font-weight:600;
        text-transform:uppercase;
        padding:0 10px;
        flex-wrap:nowrap;
        cursor:pointer;
    }
    @media (max-width:768px) {
        a{
            display: none;
        }
    }
`


const Burgernav = styled.div`
    position: fixed;
    top:0;
    bottom:0;
    right:0;
    background:white;
    width:300px;
    z-index:16;
    list-style:none;
    padding:20px;
    display: flex;
    flex-direction:column;
    text-align:start;
    transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition:transform 0.6s ease-in-out;
    overflow-y:auto;
    li{
        padding:15px 0;
        border-bottom: 1px solid rgba(0,0,0,0.2);
        a{
            font-weight:600;
        }
    }
    div{
        .fa-x{
        width:10%;
        display: flex;
        justify-content:center;
        align-items:center;
        float:right;
        text-align:end;
        cursor:pointer;
    }
    }
`