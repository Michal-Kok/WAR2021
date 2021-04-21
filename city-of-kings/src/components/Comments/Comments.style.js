import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    padding: 5% 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* align-items: stretch; */
    /* background-color: ${({theme}) => theme.colors.grey}; */
`;

export const StyledForm = styled.form`
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 30px;
    margin-top: 20px;
`;

export const StyledInput = styled.input`
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 15px;
    outline: none;
    width: 70%;
`;    

export const StyledSubmitButton = styled.div`
    background-color: ${({theme}) => theme.colors.pink};
    width: 80px;
    height: 100%;
    text-align: center;
    line-height: 30px;
    color: ${({theme}) => theme.colors.white};
    font-size: ${({theme}) => theme.fontSize.s};
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 20px;
    transition: .3s;
`;