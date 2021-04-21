import React from 'react';
import {  StyledTitle, Wrapper } from './Footer.style';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { StyledMediaList } from './Footer.style';

const Footer = () => {

    return(
        <Wrapper>
             <StyledTitle>
                 Contact us and learn more
             </StyledTitle>
             <StyledMediaList>
                <FaFacebookF/>
                <FaTwitter/>
                <FaLinkedinIn/>
            </StyledMediaList>
        </Wrapper>
    );

}

export default Footer;