import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation/Navigation';

const Wrapper = styled.div`
     width: 100%;
    min-height: 100vh;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 70px 1fr;
    background-color: ${({theme}) => theme.colors.darkColor};
`;

const MainTemplate = ({children}) => {


    return (
       < Wrapper >
        < Navigation />
        {children}
       </Wrapper>
    );
}

export default MainTemplate;