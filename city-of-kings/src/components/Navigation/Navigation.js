import React from 'react';
import { StyledLink, StyledMediaList, StyledNavigationList, Wrapper } from './Navigation.style';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
const Navigation = () => {

    return(
        <>
            <Wrapper>
                <StyledNavigationList>
                    <StyledLink to="/">
                        Home
                    </StyledLink>
                    <StyledLink to="/forum">
                        Forum
                    </StyledLink>
                    <StyledLink to="/">
                        Unable stuff
                    </StyledLink>
                </StyledNavigationList>
                <StyledMediaList>
                    <FaFacebookF/>
                    <FaTwitter/>
                    <FaLinkedinIn/>
                </StyledMediaList>
            </Wrapper>
        </>
    )
}

export default Navigation;