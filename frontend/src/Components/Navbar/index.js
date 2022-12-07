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
} from "./NavbarElements";
//import { FaBars } from "react-icons/fa";
//import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";

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
                CBD {hover ? <ArrowDown /> : <ArrowRight />}
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
