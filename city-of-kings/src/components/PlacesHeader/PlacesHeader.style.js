import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    padding: 10% 20%;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image:linear-gradient(to bottom, rgba(20, 20, 20, 0.6), rgba(20, 20, 20, 0.6)),
        url(${({background}) => background});
    background-color: rgba(1, 1, 1, .4);
`;

export const StyledTitle = styled.h1`
color: ${({theme}) => theme.colors.white};
text-transform: uppercase;
font-size: ${({theme}) => theme.fontSize.xll};
text-align: center;
`;