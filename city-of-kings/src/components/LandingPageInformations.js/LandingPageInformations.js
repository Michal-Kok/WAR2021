import React from 'react';
import { StyledInformationList, StyledListElement, StyledParagraph, StyledSubtitle, StyledSVGContainer, StyledTitle, Wrapper } from './LandingPageInformations.style';
import { AiOutlineCustomerService, AiOutlineHeart } from 'react-icons/ai';
import { GiChurch } from 'react-icons/gi';
import { IoBeerOutline } from 'react-icons/io5';

const LandingPageInformations = () => {

    return (
        <>
            <Wrapper>
                <StyledTitle>
                    Dlaczego Kraków
                </StyledTitle>
                <StyledSubtitle>
                    Kraków słynie z bogatej oferty kulturalnej i rozrywkwej!
                </StyledSubtitle>
                <StyledInformationList>
                    <StyledListElement>
                        <StyledSVGContainer>
                            <AiOutlineCustomerService />
                        </StyledSVGContainer>
                        <StyledParagraph>
                            Ogromne wydarzenia.
                        </StyledParagraph>
                    </StyledListElement>
                    <StyledListElement>
                        <StyledSVGContainer>
                            <AiOutlineHeart />
                        </StyledSVGContainer>
                        <StyledParagraph>
                            Mocne przyjaźnie.
                        </StyledParagraph>
                    </StyledListElement>
                    <StyledListElement>
                        <StyledSVGContainer>
                            <GiChurch />
                        </StyledSVGContainer>
                        <StyledParagraph>
                            Mnóstwo zabytków.
                        </StyledParagraph>
                    </StyledListElement>
                    <StyledListElement>
                        <StyledSVGContainer>
                            <IoBeerOutline />
                        </StyledSVGContainer>
                        <StyledParagraph>
                            Najlepsze browary.
                        </StyledParagraph>
                    </StyledListElement>
                </StyledInformationList>
            </Wrapper>
        </>
    )
}

export default LandingPageInformations;