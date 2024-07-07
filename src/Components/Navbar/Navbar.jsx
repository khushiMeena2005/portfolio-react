import React, { useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navbar.css";
import underline from "../../../public/Images/assets/nav_underline.svg";
import menu_open from "../../../public/Images/assets/menu_open.svg"
import menu_close from "../../../public/Images/assets/menu_close.svg"

const Navbar = () => {
const [menu, setMenu] = useState("home");
const menuRef=useRef();
 const openMenu=()=>{
  menuRef.current.style.right="0";
 }

 const closeMenu=()=>{
  menuRef.current.style.right="-450px";
 }
  return (
    <div className="navbar">
      <h1 className="logoImage">PORTFOLIO</h1>
      <img src={menu_open}  onClick={openMenu} alt="" className="nav-mob-open"/>
      <ul ref={menuRef} className="nav-menu">
      <img className="nav-mob-close" src={menu_close} alt="" onClick={closeMenu}/>
        <li>
        <AnchorLink className="anchor-link" offset={50} href="#home">
          <p onClick={()=>setMenu("home")}>Home</p> </AnchorLink>
          {menu === "home" ? <img className="underline" src={underline} alt="" /> : <></>}
        </li>
        <li>
        <AnchorLink  className="anchor-link" offset={50} href="#about"> 
          <p onClick={()=>setMenu("about")}>About</p></AnchorLink>
          {menu === "about" ? <img className="underline" src={underline} alt="" /> : <></>}
        </li>
        <li>
        <AnchorLink className="anchor-link" offset={50} href="#skills">
          <p onClick={()=>setMenu("skills")}>Skills</p> </AnchorLink>
          {menu === "skills" ? <img className="underline" src={underline} alt="" /> : <></>}
        </li>
        <li>
        <AnchorLink className="anchor-link" offset={50} href="#projects"> 
          <p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink>
          {menu === "projects" ? <img className="underline" src={underline} alt="" /> : <></>}
        </li>
        <li>
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          <p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>
          {menu === "contact" ? <img className="underline" src={underline} alt="" /> : <></>}
        </li>
      </ul>
    
    </div>
  );
};

export default Navbar;
