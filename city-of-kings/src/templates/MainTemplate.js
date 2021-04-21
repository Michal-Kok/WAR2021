import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation/Navigation';

const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    background-color: ${({theme}) => theme.colors.white};
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