import styled from 'styled-components';

export const Wrapper = styled.div`
    min-height: 700px;
    width: 500px;
    padding: 7%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 40px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const StyledName = styled.h3`
    color: black;
    font-size: ${({theme}) => theme.fontSize.m};
`;