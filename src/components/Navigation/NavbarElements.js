import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';



export const Nav = styled.nav`
background:white;
box-shadow:0px .5px 13px 5px #888;
height: 100px;
display: flex;
justify-content: center;
padding: .5rem cal((100vw-1000px)/ 2);
z-index: 2;
`;

export const NavLink = styled(Link)`
color: #808070;
display: flex;
align:sticky;
align-items: center;
text-decoration: none;
padding-top: 0 15px;
height: 100%;
cursor: pointer;
&.active{
color:#000;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width:768px){
display: block;
position: absolute;
top: 0;
right: 0;
transform: translate(-100%, 75%);
font-size: 1.5rem;
cursor: pointer;
}
`;

export const NavMenu = styled.div`
align:Sticky-top;
display: flex;
text-transform: uppercase;
align-items: center;
@media screen and (max-width: 768px) {
display: none;
}
`;