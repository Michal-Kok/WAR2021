import React from 'react';
import Comments from '../Comments/Comments';
import {  StyledName, Wrapper } from './Forum.style';

const Forum = () => {

    return (
        <Wrapper>
            <StyledName>
                Podziel się z innymi tym co warto zobaczyć!
            </StyledName>
                <Comments/>
        </Wrapper>
    )
}

export default Forum;