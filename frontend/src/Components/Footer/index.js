import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  Logo,
} from "./FooterElements";

import StashLogo from "../../assets/img/StashdropsLogo.png";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <SocialLogo to="/" onClick={toggleHome}>
        <Logo src={StashLogo} style={{ width: 300 }} alt="stash" />
      </SocialLogo>
      {/*<WebsiteRights>
              Gonzalo Barrios {new Date().getFullYear()} All rights reserved.
            </WebsiteRights> */}
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Productos</FooterLinkTitle>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>¿Quienes somos?</FooterLinkTitle>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>¿Porque StashDrops?</FooterLinkTitle>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contacto</FooterLinkTitle>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Suscribirme</FooterLinkTitle>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            {/*<WebsiteRights>
              Gonzalo Barrios {new Date().getFullYear()} All rights reserved.
            </WebsiteRights> */}
            <SocialIcons>
              <SocialIconLink
                href="//www.instagram.com/ponja__"
                target="_blank"
                aria-label="Instagram"
                color="#c32aa3"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="//www.facebook.com/"
                target="_blank"
                aria-label="Facebook"
                color="#1877f2"
              >
                <FaFacebook />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
      <FooterWrap></FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
