import styled from 'styled-components';

interface ButtonProps { }
const Button = styled.button<ButtonProps>`
    all: unset;
    color: black !important;
    -webkit-text-fill-color: black;
    opacity: 1;
    background: rgb(230,230,230);
    padding: .5em 1em;
    border-radius: 3px;
    box-shadow: 2px 2px 5px -1px rgba(0,0,0,0.3);
    box-sizing: border-box;
`;

export default Button;