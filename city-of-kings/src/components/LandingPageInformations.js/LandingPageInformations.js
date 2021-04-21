import React, { useEffect } from 'react';
import { StyledInformationList, StyledListElement, StyledParagraph, StyledSubtitle, StyledSVGContainer, StyledTitle, Wrapper } from './LandingPageInformations.style';
import { AiOutlineCustomerService, AiOutlineHeart } from 'react-icons/ai';
import { GiChurch } from 'react-icons/gi';
import { IoBeerOutline } from 'react-icons/io5';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const LandingPageInformations = () => {

    useEffect(() => {
        const info = document.querySelector(".information");

        gsap.registerPlugin(ScrollTrigger);

        gsap.set(info.children, {opacity: 0, y: 150,});
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: info,
                start: 'top 25%',
            }
        });

        tl.to(
            info.children,
            {opacity: 1, y: 0, stagger: .2,}
        )
}, [])

    return (
        <>
            <Wrapper className="information">
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