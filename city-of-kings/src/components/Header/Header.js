import React from 'react';
import { useHistory } from 'react-router';
import img from '../../assets/images/headerIMG.jpg';
import { StyledHeaderText, StyledTitle, Wrapper, StyledHeaderButton } from './Header.style';

const Header = () => {

    const history = useHistory();

    return (
        <Wrapper background={img}>
            <StyledHeaderText>
                Wspaniałe dni w mieście Królów Polski
            </StyledHeaderText>
            <StyledTitle>
                Poznaj bliżej Kraków
            </StyledTitle>
            <StyledHeaderButton onClick={() => history.push('/forum')}>
                Atrakcje
            </StyledHeaderButton>
        </Wrapper>
    )
}

export default Header;