import React from 'react';
import { StyledContent, StyledTextContainer, Wrapper } from './Comment.style';

const Comment = ({ content }) => {

    return(
        <Wrapper>
            <StyledTextContainer>
                <StyledContent>
                    {content}
                </StyledContent>
            </StyledTextContainer>
        </Wrapper>
    );

}

export default Comment;