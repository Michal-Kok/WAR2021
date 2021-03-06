import styled from 'styled-components';

export const Wrapper = styled.div`
    min-height: 100vh;
    width: 100vw;
    padding: 10% 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.grey};
`;