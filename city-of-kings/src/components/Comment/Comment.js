import React from 'react';
import { StyledContent, Wrapper } from './Comment.style';

const Comment = ({ content }) => {

    return(
        <Wrapper>
            <StyledContent>
                {content}
            </StyledContent>
        </Wrapper>
    );

}

export default Comment;