import React from 'react';
import img from '../../assets/images/headerIMG.jpg';
import { StyledHeaderText, StyledTitle, Wrapper, StyledHeaderButton } from './Header.style';

const Header = () => {

    return (
        <Wrapper background={img}>
            <StyledHeaderText>
                Wspaniałe dni w mieście Królów Polski
            </StyledHeaderText>
            <StyledTitle>
                Poznaj bliżej Kraków
            </StyledTitle>
            <StyledHeaderButton>
                Atrakcje
            </StyledHeaderButton>
        </Wrapper>
    )
}

export default Header;