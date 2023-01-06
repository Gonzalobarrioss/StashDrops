import styled, { keyframes } from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import {
  MdKeyboardArrowRight,
  MdArrowForward,
  MdArrowDropDown,
  MdArrowDownward,
  MdKeyboardArrowDown,
} from "react-icons/md";

export const Nav = styled.nav`
  background: ${({ scrollnav }) => (scrollnav ? "transparent" : "#297058")};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: absolute;
  top: 0;
  z-index: 10;

  transform: ${({ scrollnav }) =>
    scrollnav ? "translateY(-100px)" : "translateY(0%)"};
  transition: 0.75s;

  @media screen and (min-width: 769px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 0 16px;
  max-width: 1600px;
  transition: 0.5s;

  &.active {
    background: #fff;
  }
`;

export const NavLogo = styled.div`
  display: flex;
  color: #fff;
  font-size: 24px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 42px;
  height: 42px;

  font-weight: bold;
  text-decoration: none;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  background: #0a192f;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: 0.5s;
  border: 1px solid #fff;
  text-decoration: none;
  display: flex;
  position: relative;

  &:hover {
    span {
      &:nth-child(1) {
        transform: scaleY(1);
        transform-origin: bottom;
        transition: transform 0.5s;
      }
      &:nth-child(2) {
        transform: scaleX(1);
        transform-origin: left;
        transition: transform 0.5s;
      }
      &:nth-child(3) {
        transform: scaleY(1);
        transform-origin: bottom;
        transition: transform 0.5s;
        transition-delay: 0.5s;
      }
      &:nth-child(4) {
        transform: scaleX(1);
        transform-origin: left;
        transition: transform 0.5s;
        transition-delay: 0.5s;
      }
    }
  }

  span {
    display: block;
    position: absolute;
    background: #03e9f4;

    &:nth-child(1) {
      left: -1px;
      bottom: 0;
      width: 1px;
      height: 100%;
      transform: scaleY(0);
      transform-origin: top;
      transition: transform 0.5s;
    }
    &:nth-child(2) {
      left: 0;
      bottom: -1px;
      width: 100%;
      height: 1px;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.5s;
    }
    &:nth-child(3) {
      right: -1px;
      bottom: 0;
      width: 1px;
      height: 100%;
      transform: scaleY(0);
      transform-origin: top;
      transition: transform 0.5s;
      transition-delay: 0.5s;
    }
    &:nth-child(4) {
      left: 0;
      top: -1px;
      width: 100%;
      height: 1px;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.5s;
      transition-delay: 0.5s;
    }
  }
`;

export const MobileIcon = styled.div`
  display: flex;
  position: relative;
  font-size: 1.4rem;
  cursor: pointer;
  color: #fff;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const NavMenu = styled.ul`
  position: relative;
  display: flex;
  top: 0;
  list-style: none;
  text-align: center;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }

  &.active li a {
    color: #0a192f;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  font-size: 18px;
`;

export const NavLi = styled.li``;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;

  text-decoration: none;
  font-size: 1em;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavLink = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;

  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:active {
    color: #15cdfc;
  }
`;

export const Indicator = styled.i`
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background: linear-gradient(to bottom, #0a192f, #0a192f);
  border-radius: 50%;
  transform: scale(0.9);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5), inset 0 4px 4px rgba(0, 0, 0, 0.1),
    inset 0 -4px 4px rgba(0, 0, 0, 0.1);
  transition: 0.5s;

  @media screen and (min-width: 769px) {
    width: 24px;
    height: 24px;
  }
`;

export const ArrowDown = styled(MdKeyboardArrowDown)`
  font-size: 8px;

  @media (min-width: 1440px) {
    font-size: 20px;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: 22px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 22px;
  }

  @media screen and (max-width: 424px) {
    font-size: 18px;
  }

  @media screen and (max-width: 374px) {
    margin-left: 4px;
    font-size: 18px;
  }
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  font-size: 8px;

  @media (min-width: 1440px) {
    font-size: 20px;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: 22px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 18px;
  }

  @media screen and (max-width: 424px) {
    font-size: 16px;
  }

  @media screen and (max-width: 374px) {
    margin-left: 4px;
    font-size: 18px;
  }
`;

export const ListOptions = styled.ul`
  //background-color: "#fff"; NO ANDA
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  position: absolute;
  top: 80px;
`;

export const ItemOptions = styled.li`
  display: flex;
  width: 100%;
  padding: 4px 0;
  border-top: 1px solid #fff;
  align-items: flex-start;
  //text-decoration: underline;
`;
