import React from 'react';
import { StyledTitle, Wrapper } from './PlacesHeader.style';
import img from '../../assets/images/placesIMG.jpg'

const PlacesHeader = () => {

    return (
        <Wrapper background={img} >
            <StyledTitle>
                Poniżej znajdziesz Informcje o ciekawych miejscach
            </StyledTitle>
        </Wrapper>
    )
}

export default PlacesHeader;