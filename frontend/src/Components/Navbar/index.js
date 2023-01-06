import React, { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavLi,
  ArrowDown,
  ArrowRight,
  ListOptions,
  ItemOptions,
} from "./NavbarElements";
//import { FaBars } from "react-icons/fa";
//import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";

//import { store } from "../../redux/store";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);

    return () => {};
  }, []);

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const options = ["CBD", "¿Que es?", "Beneficios", "¿Como se usa?"];
  const defaultOption = options[0];

  return (
    <>
      <Nav scrollnav={scrollNav}>
        <NavLogo>Stash Drops</NavLogo>
        <NavbarContainer>
          {/*  
                    
                   {/* 
                        

                       /* <FontAwesomeIcon icon={isClicked ? faToggleOn : faToggleOff }  onClick={() => setIsClicked(prev => !prev)}  /> 
                        
                        <GlowingText>@</GlowingText>
                    </NavLogo>*/}

          {/* <MobileIcon onClick={toggle}>
            <FaBars />
                </MobileIcon> */}
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={0}
              >
                Tienda
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={0}
              >
                ¿Quienes somos?
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={0}
                onMouseEnter={onHover}
                onMouseLeave={onHover}
              >
                CBD{" "}
                {hover ? (
                  <>
                    <ArrowDown />
                    <ListOptions style={{ background: "#297058" }}>
                      <ItemOptions>¿Qué es?</ItemOptions>
                      <ItemOptions>Beneficios</ItemOptions>
                      <ItemOptions>¿Cómo se usa?</ItemOptions>
                    </ListOptions>
                  </>
                ) : (
                  <>
                    <ArrowRight />
                  </>
                )}{" "}
                {/* 
                <Dropdown
                  options={options}
                  onChange={() => console.log("cambio")}
                  value={defaultOption}
                  placeholder="Select an option"
                />*/}
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={0}
              >
                Nuestra misión
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={0}
              >
                Contacto
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
