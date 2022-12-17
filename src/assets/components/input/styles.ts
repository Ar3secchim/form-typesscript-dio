import styled from 'styled-components';


export const InputContainer = styled.div`
    width: 100%;
    height: 42px;
    color: #535bf2;
    border: 1px solid #535bf2;
    border-radius: 21px;
    overflow: hidden;
    padding: 0 10px;
    margin-bottom: 10px;

    & input {
        width: 100%;
        height: 42px;
        border-radius: 21px;
        background-color: transparent;
        border: 0;
        outline: none;
    }
`

export const ErrorMessage = styled.p`
    height:10px;
    color: red;
    font-size:12px;
    margin: 0px 0px 15px 8px;
`