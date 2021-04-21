import styled from 'styled-components';

export const Wrapper = styled.div`
    min-height: 30px;
    width: 100%;
    padding: 5% 0;
`;

export const StyledTextContainer = styled.div`
    border-bottom: 1px solid ${({theme}) => theme.colors.darkGrey};
`

export const StyledContent = styled.p`
    color: black;
`;