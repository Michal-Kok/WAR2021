import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 600px;
    width: 100vw;
    padding: 80px 0;
    background-color: ${({ theme }) => theme.colors.grey};
    
`;

export const StyledTitle = styled.h2`
    font-size: ${({theme}) => theme.fontSize.l};
    text-align: center;
    text-transform: uppercase;
`;

export const StyledSubtitle = styled.p`
    font-size: ${({theme}) => theme.fontSize.m};
    text-align: center;
    width: 600px;
    margin: 25px auto;
`;

export const StyledInformationList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0 15%;
    height: 300px;
`;

export const StyledSVGContainer = styled.div`
    height: 80px;
    width: 80px;
    background-color: #fff;
    /* padding: 20px; */
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    svg {
        height: 40px;
        width: 50px;
       
    }
`;

export const StyledListElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150px;
    height: 100%;
`;

export const StyledParagraph = styled.p`
    font-size: ${({theme}) => theme.fontSize.m};
    text-align: center;
`;