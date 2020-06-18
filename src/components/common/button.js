import styled from 'styled-components';

export const Button = styled.button`
    padding: 8px 16px;
    background: black;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    ${props => props.block ? 'diaplay:block; width: 100%;' : ''}

    &:hover{
        background: grey;
    }

`;